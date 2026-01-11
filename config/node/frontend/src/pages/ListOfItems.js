import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Container, Box, CircularProgress, Alert } from '@mui/material';

const ListOfItems = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch danych z Twojego endpointu FastAPI
        fetch('http://localhost:10000/app/get_users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Błąd podczas pobierania danych');
                }
                return response.json();
            })
            .then((data) => {
                if (data.status === 'success') {
                    setUsers(data.data);
                } else {
                    throw new Error(data.message || 'Nieznany błąd');
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container sx={{ mt: 4 }}>
                <Alert severity="error">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Lista Użytkowników
            </Typography>
            <Grid container spacing={3}>
                {users.map((user, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography variant="h6" color="primary" gutterBottom>
                                    {user.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Lokalizacja:</strong> {user.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Liczba postów:</strong> {user.posts}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {users.length === 0 && (
                <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                    Brak użytkowników w bazie danych.
                </Typography>
            )}
        </Container>
    );
};

export default ListOfItems;