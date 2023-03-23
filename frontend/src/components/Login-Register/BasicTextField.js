import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type="email" label={props.label} variant="outlined" />
    </Box>
  );
}



