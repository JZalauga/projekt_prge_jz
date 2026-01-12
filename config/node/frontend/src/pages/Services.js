import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

function Services(props) {
    return <div>
        <div>Services</div>
        <Button
            className='services__button'
            variant='contained'
            size='large'
            component={Link}
            to='/map'
        >
            PRZEJDŹ DO MAPY
        </Button>


        <Button
            className='services__button'
            variant='contained'
            size='large'
            component={Link}
            to='/list'
        >
            PRZEJDŹ listy użytkowników
        </Button>

        <Button
            className='services__button'
            variant='contained'
            size='large'
            component={Link}
            to='/newuser'
        >
            Dodaj nowego użytkownika
        </Button>
    </div>

}

export default Services;