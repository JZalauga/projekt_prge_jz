import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper, Box, Alert } from '@mui/material';

const NewUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        posts: 0,
        location: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'posts' ? parseInt(value) || 0 : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'info', message: 'Wysyłanie...' });

        try {
            const response = await fetch('http://localhost:10000/app/insert_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Użytkownik dodany pomyślnie!' });
                setFormData({ name: '', posts: 0, location: '' }); // Reset formularza
            } else {
                throw new Error('Błąd serwera podczas dodawania');
            }
        } catch (error) {
            setStatus({ type: 'error', message: error.message });
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 8 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom align="center">
                    Dodaj Nowego Użytkownika
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        label="Imię / Nazwa"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Liczba postów"
                        name="posts"
                        type="number"
                        value={formData.posts}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Lokalizacja"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        margin="normal"
                        required
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Wyślij do bazy
                    </Button>

                    {status.message && (
                        <Alert severity={status.type} sx={{ mt: 2 }}>
                            {status.message}
                        </Alert>
                    )}
                </Box>
            </Paper>
        </Container>
    );
};

export default NewUser;