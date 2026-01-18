import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Clients(props) {
    return <div>      
        <div><h1>Klienci</h1></div>
        <div>Wybierz opcję</div>

        <Button
            className='object_action__button'
            variant='contained'
            size='large'
            component={Link}
            to='/clients/new_client'
        >
            Dodaj klienta
        </Button>

        <Button
            className='object_action__button'
            variant='contained'
            size='large'
            component={Link}
            to='/client/clients_list'
        >
            Lista klientów
        </Button>
    </div>

}

export default Clients;