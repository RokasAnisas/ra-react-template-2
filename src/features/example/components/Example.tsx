import { useAppDispatch, useAppSelector } from '@/middleware/redux/hooks';
import { Button } from '@/components/Button';
import { useBindInput } from '@/utility/hooks/useBindInput';

import {
  increment,
  decrement,
  incrementByAmount,
  selectCount,
} from '../redux/example.slice';

export const Example = () => {
  const { bind, value, setValue } = useBindInput();

  const example = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const increaseBy = () => {
    dispatch(incrementByAmount(+value));
    setValue('');
  };

  return (
    <div>
      <h3>State value: {example}</h3>
      <Button onClick={() => dispatch(increment())}>+ 1</Button>
      <Button onClick={() => dispatch(decrement())}>- 1</Button>
      <div>
        <span>Increment by value</span>
        <input type="number" {...bind} />
        <Button onClick={increaseBy}>Increase by</Button>
      </div>
    </div>
  );
};
