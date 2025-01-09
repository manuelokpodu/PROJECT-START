import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is the starting</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
        laudantium suscipit quos aperiam, odit asperiores officiis sequi qui est
        voluptates impedit. Mollitia, dolores praesentium aspernatur nam
        quibusdam dolorum asperiores voluptatum.
      </p>
      <h1>This is my contribution to the project</h1>
      <p>Everybody love Temi</p>

      <div>
        <p>This is for development</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
          similique rerum est aliquid? Expedita minus quidem beatae assumenda
          cum dolores iste atque fugit nobis? Minima nesciunt repellendus earum
          maxime eveniet?
        </p>
      </div>

      <h1>This is the ending</h1>
      <p>
        You know, its not really been easy for us devs.We spend our lesiure time
        coding,watching tutorials just to be perfect,since we know our carrer
        dedpends on it.We have been pushing forward,we did task and projects we
        weren't paid for, still we are here, we didn't give up.Cheers to
        developers.
      </p>
    </>
  );
}

export default App;
