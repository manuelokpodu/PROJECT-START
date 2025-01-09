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
    </>
  );
}

export default App;
