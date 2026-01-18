import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Services(props) {
    return <div>
        <div>Wybierz usługę</div>

        <Button
            className='geoportal__button'
            variant='contained'
            size= "large"
            component={Link}
            to='/map'
        >
            geoportal
        </Button>

        <Button
            className='services__button'
            variant='contained'
            size='large'
            component={Link}
            to='/cemeteries'
        >
            Cmentarze
        </Button>


        <Button
            className='services__button'
            variant='contained'
            size='large'
            component={Link}
            to='/workers'
        >
            Pracownicy
        </Button>

        <Button
            className='services__button'
            variant='contained'
            size='large'
            component={Link}
            to='/clients'
        >
            Klienci
        </Button>
    </div>

}

export default Services;