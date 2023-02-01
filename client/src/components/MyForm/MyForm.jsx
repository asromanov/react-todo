import {
  Box, Button, Container, Grid, Stack, TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitTodo } from '../../redux/actions/todosActions';

export default function MyForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (input) {
      dispatch(submitTodo(input));
      setInput('');
    }
  };

  return (
    <Container>
      <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch', marginTop: '20px' },

          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="...todo"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </Box>
        <Stack
          spacing={2}
          direction="row"
        >
          <Button variant="contained" onClick={clickHandler} style={{ marginTop: '7px' }}>Add todo</Button>
        </Stack>
      </Grid>
    </Container>
  );
}
