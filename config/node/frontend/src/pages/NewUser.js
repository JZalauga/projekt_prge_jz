import React, {useState} from 'react';
import {Container, Box, TextField} from "@mui/material";

function NewUser(props) {
    const [userName, setUserName] = useState("")
    const [userLocation, setUserLocation] = useState("")
    const [userPosts, setUserPosts] = useState(0)


    return (
        <div>

            <Container>
                <Box component="form"
                >
                    <TextField
                        fullWidth
                        label="imię"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    ></TextField>
                    <TextField
                        fullWidth
                        label="location"
                        value={userLocation}
                        onChange={(e) => setUserLocation(e.target.value)}
                    ></TextField>
                    <TextField
                        fullWidth
                        label="posts"
                        value={userPosts}
                        onChange={(e) => setUserLocation(e.target.value)}
                    ></TextField>
                </Box>
            </Container>


        </div>
    );
}

export default NewUser;
