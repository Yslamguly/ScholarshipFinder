import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField(props) {

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type={props.type}
        label={props.label}
        variant="outlined"
        value={props.text}
        onChange={({target})=>props.setText(target.value)}/>
    </Box>
  );
}



