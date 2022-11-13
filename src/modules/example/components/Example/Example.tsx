import { FC } from 'react';
import classNames from 'classnames/bind';

import { ThemeSwitcherButton } from '@/modules/themeSwitcher/components/ThemeSwitcherButton';
import { useGetExample } from '@/modules/example/example.query';
import { Button } from '@/components/Button';

import { ExampleProps } from './Example.props';

import styles from './Example.module.scss';
const cx = classNames.bind(styles);

export const Example: FC<ExampleProps> = ({}) => {
  const className = 'example';
  const { data, refetch, isFetching } = useGetExample();

  return (
    <div className={cx(className)}>
      <h1>ra-react-template-2</h1>
      <div className={cx(`${className}__paragraph-container`)}>
        <h2>Random cat fact</h2>
        <p>{data?.fact}</p>
        <Button onClick={refetch} disabled={isFetching}>
          {isFetching ? 'Loading...' : 'Another fact'}
        </Button>
      </div>
      <ThemeSwitcherButton />
    </div>
  );
};
