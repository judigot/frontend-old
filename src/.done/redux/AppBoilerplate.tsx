import React from "react";

import { RootState } from "./store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counterSlice";
import { useSelector, useDispatch } from "react-redux";

//==========STYLE==========//
import styled from "styled-components";
const H1Styled = styled.h1`
  color: blue;
`;
//==========STYLE==========//

interface Props {
  // For assigning dynamic keys (string)
  [key: string]: string | number | Date | undefined;

  // For assigning dynamic indexes (number)
  [index: number]: string | number | Date | undefined;
}

export function AnotherComponent() {
  const count = useSelector((state: RootState) => state.counter.value);
  return <h2>{count}</h2>;
}

export default function App() {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Main component that uses the global state</h1>
      <h2>{count}</h2>

      <h1>Another component that uses the global state</h1>
      <AnotherComponent />

      <p>Actions that will affect the global state:</p>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment by 5
      </button>
    </>
  );
}
