from fastapi import FastAPI
from app.routers.static_content import router
from app.routers.db_insert import router_insert

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Mapbook API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # W środowisku deweloperskim pozwalamy na wszystko
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/app")
app.include_router(router_insert, prefix="/app")
