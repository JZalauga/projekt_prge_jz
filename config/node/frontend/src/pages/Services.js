import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import {NewUser} from "../routes/LazyImports";

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
            PRZEJDŹ DO listy
        </Button>
        <Button
            className='services__button'
            variant='contained'
            size='large'
            component={Link}
            to='/newuser'
        >
            dodaj użytkownika
        </Button>
    </div>

}

export default Services;