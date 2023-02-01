import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { TextField } from '@mui/material';
import {
  asyncDelete, asyncEdit,
} from '../../redux/actions/todosActions';

export default function TodoCard({ todo }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(todo.text);

  const isEditHandler = () => {
    setEdit((prev) => !prev);
  };
  const editHandler = () => {
    setEdit((prev) => !prev);
    dispatch(asyncEdit(todo.id, input));
  };

  return (
    <Card sx={{
      minWidth: 500, margin: 'auto', display: 'flex', justifyContent: 'space-between', marginTop: '10px',
    }}
    >
      <CardContent>
        {edit ? <TextField id="outlined-basic" label="edit" variant="outlined" value={input} onChange={(e) => setInput(e.target.value)} />
          : (
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              { todo.text }
            </Typography>
          )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(asyncDelete(todo.id))} color="error">Delete</Button>
        {!edit
          ? <Button size="small" onClick={isEditHandler} color="secondary">Edit</Button>
          : <Button size="small" onClick={editHandler} color="success">Success</Button>}
      </CardActions>
    </Card>
  );
}
