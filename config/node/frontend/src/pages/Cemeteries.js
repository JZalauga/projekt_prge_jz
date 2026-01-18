import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Cemeteries(props) {
    return <div>
        <div><h1>Cmentarze</h1></div>
        <div>Wybierz opcję</div>

        <Button
            className='object_action__button'
            variant='contained'
            size='large'
            component={Link}
            to='/cemeteries/new_cemetery'
        >
            Dodaj cmentarz
        </Button>

        <Button
            className='object_action__button'
            variant='contained'
            size='large'
            component={Link}
            to='/cemeteries/cemeteries_list'
        >
            Lista cmentarzy
        </Button>
    </div>

}

export default Cemeteries;