from fastapi import APIRouter
from pydantic import BaseModel
from sqlalchemy import create_engine, text

from app.settings import db_name, db_user, db_password

router_insert = APIRouter()


def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )

def get_coord_osm(location: str) -> list[float]:
        import requests
        url = "https://nominatim.openstreetmap.org/search"
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
                          'AppleWebKit/537.36 (KHTML, like Gecko) '
                          'Chrome/130.0 Safari/537.36'
        }
        params = {
            'q': location,
            'format': 'json'
        }
        response = requests.get(url, params=params, headers=headers)
        data = response.json()
        latitude = float(data[0]['lat'])
        longitude = float(data[0]['lon'])
        return [latitude, longitude]

class UserData(BaseModel):
    name: str
    location: str


@router_insert.post("/insert_cemetery")
async def insert_user(user: UserData):
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        coords = get_coord_osm(user.location)
        params = {
            "name": user.name,
            "location": user.location,
            "latitude": coords[0],
            "longitude": coords[1]

        }

        sql_query = text("""
                         insert into cemeteries (name, location, latitude, longitude)
                         values (:name,:location, :latitude, :longitude); \
                         """)

        with db_connection.connect() as conn:
            result = conn.execute(sql_query, params)
            conn.commit()
            print(result)


    except Exception as e:
        print(e)
        raise e

    return {"status": 1}
