import * as React from "react";
import { FC } from "react";

const Foo = () => {
  return <p>Foo</p>;
};
const Component: FC = () => {
  return <Foo />;
};

interface Props {
  name: string;
  age: number;
}
const ComponentWithProps: FC<Props> = ({ name, age }) => {
  return (
    <p>
      {name}, {age}
    </p>
  );
};

const ComponentWithHooks: FC = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const n = count + 1;
    setCount(n);
  }, [count]);

  return (
    <button
      type="button"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </button>
  );
};

export default {
  Component,
  ComponentWithProps,
  ComponentWithHooks,
};
