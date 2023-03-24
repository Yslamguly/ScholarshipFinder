import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextField(props) {

  const [data, setData] = useState(() => {return ''});

  const handleDataChange = (event) => {
    console.log("before : "+data);
    setData(() => event.target.value);
    console.log("after : "+data);
    props.onData(data);
  };
  

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
        value={data}
        onChange={handleDataChange} />
    </Box>
  );
}



