import { useState } from 'react';
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit handler
    console.log('Signing in with', { email, password });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Lato, sans-serif',
      }}
    >
      <Stack spacing={2} width={300}>
        <Typography variant="h5" textAlign="center">
          Sign In
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputProps={{ style: { fontFamily: 'Lato, sans-serif', fontSize: 16 } }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{ style: { fontFamily: 'Lato, sans-serif', fontSize: 16 } }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#800020',
            '&:hover': { backgroundColor: '#800020' },
            fontWeight: 'bold',
            fontFamily: 'Lato, sans-serif',
            fontSize: 16,
          }}
        >
          Sign In
        </Button>
        <Link href="/signup" underline="hover" sx={{ color: '#800020', textAlign: 'center', fontFamily: 'Lato, sans-serif', fontSize: 16 }}>
          Sign Up
        </Link>
      </Stack>
    </Box>
  );
}

export default SignIn;
