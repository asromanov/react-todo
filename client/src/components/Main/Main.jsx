import React from 'react';
import { Container } from '@mui/material';
import MyForm from '../MyForm/MyForm';
import MyTodos from '../MyTodos/MyTodos';
import SortTodos from '../SortTodos/SortTodos';

export default function Main() {
  const [sort, setSort] = React.useState('');
  return (
    <Container>
      <MyForm />
      <SortTodos setSort={setSort} sort={sort} />
      <MyTodos sort={sort} />
    </Container>
  );
}
