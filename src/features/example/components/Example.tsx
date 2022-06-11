import { ChangeEvent, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/middleware/redux/hooks';
import { Button } from '@/components/Button';

import {
  increment,
  decrement,
  incrementByAmount,
} from '../redux/example.slice';

export const Example = () => {
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const example = useAppSelector(state => state.example.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>State value: {example}</h3>
      <Button onClick={() => dispatch(increment())}>+ 1</Button>
      <Button onClick={() => dispatch(decrement())}>- 1</Button>
      <div>
        <span>Increment by value</span>
        <input type="number" value={value} onChange={handleChange} />
        <Button onClick={() => dispatch(incrementByAmount(+value))}>
          Increase by
        </Button>
      </div>
    </div>
  );
};
