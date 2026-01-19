from fastapi import APIRouter
from sqlalchemy import create_engine, text
from app.settings import db_name, db_user, db_password

router_get_cemetery = APIRouter()

router_get_worker = APIRouter()

router_get_client = APIRouter()




def connect_to_db(db_name: str, db_user: str, db_password: str):
    return create_engine(
        f"postgresql://{db_user}:{db_password}@postgis:5432/{db_name}"
    )


@router_get_cemetery.get("/get_cemetery")
async def get_users():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        sql_query = text("""select *
                            from cemeteries;""")

        with db_connection.connect() as conn:
            result = conn.execute(sql_query)
            cemeteries = [dict(row._mapping) for row in result]

        return {"status": "success", "data": cemeteries}

    except Exception as e:
        print(f' bląd podczas get_users')
        return {"status": 'error'}


@router_get_worker.get("/get_worker")
async def get_worker():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        sql = text("""select *
                    from workers;""")
        
        with db_connection.connect() as conn:
            result = conn.execute(sql)
            workers = [dict(row._mapping) for row in result]

        return {"status": "success", "data": workers}

    except Exception as e:
        print(f' bląd podczas get_worker')
        return {"status": 'error'}
    

@router_get_client.get("/get_client")
async def get_client():
    try:
        db_connection = connect_to_db(db_name=db_name, db_user=db_user, db_password=db_password)

        sql = text("""select *
                    from clients;""")
        with db_connection.connect() as conn:
            result = conn.execute(sql)
            clients = [dict(row._mapping) for row in result]
            
        return {"status": "success", "data": clients}

    except Exception as e:
        print(f' bląd podczas get_client')
        return {"status": 'error'}
