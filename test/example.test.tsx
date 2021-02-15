import * as React from "react";
import { DetailedHTMLProps, ButtonHTMLAttributes, FC } from "react";

import { fireEvent, render } from "@testing-library/react";

type ButtonProps = Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
>;

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "hotpink",
        color: "white",
        padding: "12px 20px",
        fontSize: 18,
        borderRadius: 2,
        border: "none",
      }}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

describe(`exports a Button component, that`, () => {
  describe(`matches snapshots:`, () => {
    it(`without props and children`, () => {
      expect(render(<Button />).asFragment()).toMatchSnapshot();
    });

    it(`without props, with text children`, () => {
      expect(render(<Button>Test</Button>).asFragment()).toMatchSnapshot();
    });

    it(`without props, with React children`, () => {
      expect(
        render(
          <Button>
            Test <strong>this</strong>
          </Button>
        ).asFragment()
      ).toMatchSnapshot();
    });
  });
  describe(`calls onClick when clicked`, () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button data-testid="button" onClick={onClick}>
        Click me
      </Button>
    );

    const button = getByTestId("button");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
