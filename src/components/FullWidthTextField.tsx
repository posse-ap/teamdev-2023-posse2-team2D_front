import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FullWidthTextField = (props: any) => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        margin: 'auto',
        padding: '10px',
      }}
    >
      <TextField
        fullWidth
        label={props.label}
        multiline
        rows={props.rows}
        helperText={props.helperText}
        id="fullWidth" />
    </Box>
  );
}

export default FullWidthTextField;