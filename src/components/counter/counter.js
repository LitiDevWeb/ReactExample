import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import Alert from '@mui/material/Alert';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

const Counter = () => {
  const [darkMode, setDarkMode] = useState(0);

  const handleClick = () => {
    setDarkMode(darkMode + 1);
  };

  return (
    <div>
      <p>Dark Mode</p>
      <Switch checked={darkMode} onClick={handleClick} />
      <div>
        <TextField id='outlined-basic' label='Username' variant='standard' />
      </div>
      <div>
        <TextField id='outlined-basic' label='password' type='password' variant='standard' />
      </div>
      <Alert severity='error'>Your username and password are incorrect!</Alert>
      <Badge badgeContent={darkMode} color='secondary'>
        <MailIcon color='action' />
      </Badge>
    </div>
  );
};

export default Counter;
