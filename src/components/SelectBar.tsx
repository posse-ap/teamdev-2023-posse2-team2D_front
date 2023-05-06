import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectBar(props: any) {
  const [status, setStatus] = React.useState<string | number>('1');
  const [selectedComponent, setSelectedComponent] = React.useState(props.component1);

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setStatus(event.target.value);
    setSelectedComponent(status === '1' ? props.component2 : props.component1);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select value={status} onChange={handleChange} displayEmpty={false}>
          <MenuItem value={'1'}>{props.option1}</MenuItem>
          <MenuItem value={'2'}>{props.option2}</MenuItem>
        </Select>
      </FormControl>
      <div>{selectedComponent}</div>
    </div>
  );
}
