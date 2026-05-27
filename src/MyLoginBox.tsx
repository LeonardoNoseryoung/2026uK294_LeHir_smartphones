import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

  

function MyLoginBox() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: 300,
        margin: 'auto',
        mt: 5,
      }}
    >
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />

      <Button
        variant="contained"
        onClick={() => {if (email === '' || password === '') {
            alert('Please fill in both fields');
            return;
        }
        console.log('Email:', email);
        console.log('Password:', password);

          fetch(`http://localhost:3030/smartphones/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },

            body: JSON.stringify({ email, password })
          })

            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default MyLoginBox;