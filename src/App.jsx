import React, { useState } from "react";
import UsestateHook from "./component/UsestateHook";
import ConditionalRender from "./component/ConditionalRender";
import ListRendering from "./component/ListRendering";
import Darkmode from "./component/Darkmode";

export default function App() {
  const [log, setLog] = useState(true);
  return (
    <div>
      {log ? <UsestateHook /> : <ConditionalRender />}
      <button onClick={() => setLog(!log)}>button</button>

      <ListRendering />
      <Darkmode/>
    </div>
  );
}
