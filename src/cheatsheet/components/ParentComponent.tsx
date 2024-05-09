import React from "react";
import AccessChildState from "./AccessChildState";
import { ChildComponent } from "./ChildComponent";

import Memoization from "./Memoization";

import Movies from "./Movies";

interface Props {
  // For assigning dynamic keys (string)
  [key: string]: string | number | Date | undefined;

  // For assigning dynamic indexes (number)
  [index: number]: string | number | Date | undefined;
}

export const ParentComponent = ({}: Props) => {
  const initialCount = 0;

  const [count, setCount] = React.useState(initialCount);

  const initialName = "Click here to change this state";

  const [getName, setName] = React.useState(initialName);

  // Runs only once
  React.useEffect(() => {
    singleLineOperation();
    console.log(
      "Initial code: parent. Runs after all of the child components are rendered"
    );
  }, []);

  const clickEvent = () => {
    alert("Click event");
  };

  const increment = () => {
    setCount(count + 1);
  };

  const parentFunction = () => {
    alert("This function is from the parent component");
  };

  const valueReference = React.useRef<HTMLInputElement>(null);

  const getValue = () => {
    const value = valueReference.current?.value;
    if (value) {
      alert(value);
    }
  };

  const [fullName, setState] = React.useState({
    firstName: "Jude",
    lastName: "Igot",
  });

  // Runs on a specific state change; "state listener"; will only run once a specific state is changed
  React.useEffect(() => {
    console.log("Runs on every state change.");
  }, [fullName]);

  const handleUpdate = () => {
    setState({ ...fullName, lastName: "Reid" });
  };

  const singleLineOperation = () => console.log("One-liner function");
  const data = [
    {
      id: 1,
      firstName: "Alpha",
    },
    {
      id: 2,
      firstName: "Beta",
    },
    {
      id: 3,
      firstName: "Charlie",
    },
    {
      id: 4,
      firstName: "Delta",
    },
    {
      id: 5,
      firstName: "Echo",
    },
  ];

  const [oneTimeStateChange, setOneTimeStateChange] = React.useState<
    boolean | string
  >(false); // <any> will allow any data type on state change

  const handleOneTimeStateChange = () => {
    if (!oneTimeStateChange) {
      setOneTimeStateChange("Can not be changed");
    }
  };

  const [parentState, setParentState] = React.useState<string>(
    "Initial parent state"
  ); // <any> will allow any data type on state change

  return (
    <div
      className="SampleComponent"
      style={{
        textAlign: "center",
        backgroundColor: "#ddd",
        padding: "20px",
      }}
    >
      <h1>React</h1>

      <h2>Fetch data from an API</h2>
      <Movies />
      <hr />

      <h2>*Check console for the initial code</h2>
      <hr />

      <h2>
        <AccessChildState />
      </h2>
      <hr />

      <h2>"Prop drilling"</h2>
      <h2>Props (passing data/function from parent to child)</h2>
      <h2>Accessing/changing a parent's state using props:</h2>
      <h3>{parentState}</h3>

      <span>*values come from the parent component</span>
      {data.map((person) => {
        return (
          <ChildComponent
            changeParentState={setParentState} // Passing the setParentState setter function to child component
            parentFunction={parentFunction}
            key={person.id}
            firstName={person.firstName}
          />
        );
      })}

      <hr />

      <h2>Click event</h2>
      <p>These will not invoke the function on render:</p>
      <code>✔️ onClick={"{functionName}"}</code>
      <br />
      <code>✔️ onClick={`{ () => { functionName("value"); } }`}</code>
      <br />
      <br />
      <br />

      <p>This will invoke the function on render:</p>
      <code>❌ onClick={`{functionName("value")}`}</code>

      <br />
      <br />
      <button onClick={clickEvent}>Click Event</button>
      <hr />

      <h2>Change state</h2>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
      <button
        onClick={() => {
          setName("Changed state");
        }}
      >
        {getName}
      </button>
      <hr />

      <h2>Getting values</h2>
      <input type="text" ref={valueReference} />
      <br />
      <br />
      <button onClick={getValue}>Click here to alert the inputted value</button>
      <hr />

      <h2>Change an object's property</h2>
      <p>
        Only the last name is changed in this state. Change only a single a
        property of an object
      </p>
      <div>
        <code>{JSON.stringify(fullName)}</code>
      </div>
      <button onClick={handleUpdate}>
        {fullName.firstName} {fullName.lastName}
      </button>
      <hr />

      <h2>Change state only once</h2>
      <button onClick={handleOneTimeStateChange}>
        {oneTimeStateChange ? String(oneTimeStateChange) : "false"}
      </button>
      <hr />

      <Memoization />
      <hr />

      <h2>Persist a value (won't reset to the initial value)</h2>
      <code>const refObject = useRef(0)</code>
      <hr />

      <h2>Accessing previous state on setState</h2>
      <code>
        {
          "<button onClick={() => setCount(prevCount => prevCount - 1)}>Click Me</button>"
        }
      </code>
      <hr />

      <h2>Router</h2>
      <hr />

      <h2>Lazy initial state</h2>
      <hr />

      <h2>Batch state update</h2>
      <hr />

      <h2>Custom hooks</h2>
      <hr />
    </div>
  );
};
const computeHardToComputeNumber = (number: number) => {
  for (let i = 0; i < 3000000000; i++) {}
  return number * 2;
};
