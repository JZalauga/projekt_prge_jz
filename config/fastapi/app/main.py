from fastapi import FastAPI
from app.routers.static_content import router
from app.routers.db_insert import router_insert_cemetery, router_insert_worker
from app.routers.dynamic_content import router_get_cemetery, router_get_worker

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(title="Mapbook API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(router, prefix="/app")

app.include_router(router_insert_cemetery, prefix="/app")
app.include_router(router_get_cemetery, prefix="/app")

app.include_router(router_insert_worker, prefix="/app")
app.include_router(router_get_worker, prefix="/app")
