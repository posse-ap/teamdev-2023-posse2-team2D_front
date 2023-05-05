import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectBar(props:any) {
  const [status, setStatus] = React.useState<string>('1'); // 型を明示的に指定する

  const handleChange = (event: SelectChangeEvent<string>) => { // SelectChangeEventの型パラメーターも指定する
    setStatus(event.target.value);
  };

  const selectedItemText = status === '1' ? props.component1 : props.component2;

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={status}
          onChange={handleChange}
          displayEmpty={false}
        >
          <MenuItem value={1}>{props.option1}</MenuItem>
          <MenuItem value={2}>{props.option2}</MenuItem>
        </Select>
      </FormControl>
      <div>{selectedItemText}</div> {/* 切り替えた文字列を表示する */}
    </div>
  );
}
