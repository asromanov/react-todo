import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container, InputLabel } from '@mui/material';

export default function SortTodos({ sort, setSort }) {
  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sort}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>none</em>
          </MenuItem>
          <MenuItem value="text">name</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
}
