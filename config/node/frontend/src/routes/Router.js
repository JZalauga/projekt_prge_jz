import {createHashRouter} from "react-router-dom";
import {Home, Map, Services, ListOfItems, NewUser, Cemeteries, Workers, Clients} from "./LazyImports";


const routes = createHashRouter(
    [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/map',
            element: <Map/>
        },
        {
            path: '/services',
            element: <Services/>
        },
        {
            path: '/list',
            element: <ListOfItems/>
        },
        {
            path: '/newuser',
            element: <NewUser/>
        },
        {
            path: '/Cemeteries',
            element: <Cemeteries/>
        },
        {
            path: '/Workers',
            element: <Workers/>
        },
        {
            path: '/Clients',
            element: <Clients/>
        }, 
        {
            path: '*',
            element: <div>404</div>
        }
    ]
)


export default routes;