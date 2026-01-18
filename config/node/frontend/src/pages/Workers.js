import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Workers(props) {
    return <div>      
        <div><h1>Pracownicy</h1></div>
        <div>Wybierz opcję</div>

        <Button
            className='object_action__button'
            variant='contained'
            size='large'
            component={Link}
            to='/workers/new_worker'
        >
            Dodaj pracownika
        </Button>

        <Button
            className='object_action__button'
            variant='contained'
            size='large'
            component={Link}
            to='/workers/workers_list'
        >
            Lista pracowników
        </Button>
    </div>

}

export default Workers;