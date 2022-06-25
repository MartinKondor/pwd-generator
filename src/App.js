import React, { useState } from "react";
import './App.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/system/Box';

import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [pwd, setPwd] = useState("");
  const [length, setLength] = useState(16);

  const generateNewPassword = event => {
    event.preventDefault();
    let newPwd = "";

    for (let i = 0; i < length; i++) {
      newPwd += Math.ceil(Math.random()*10 - 1);
    }
  
    setPwd(newPwd);
  }

  return (
    <div className="App">
      <Container maxWidth="sm" align="center">
          <Header />

          <FormControl sx={{ width: '33ch' }} >

            <Box mt={1} mb={1}>
              <TextField
                id="pwd"
                label="Generated Password"
                value={pwd}
                variant="filled"
                disabled
                fullWidth />
            </Box>

            <Box mb={1}>
              <TextField
                id="excluded-chrs"
                label="Excluded characters (!%1234, +4 etc.)"
                variant="standard"
                fullWidth />
            </Box>

          </FormControl>

          <Box mt={2}>
            <Button
              onClick={generateNewPassword}
              variant="contained"
              >
                Generate New Password
            </Button>
          </Box>
      
          <Footer />

      </Container>
    </div>
  );
}

export default App;
