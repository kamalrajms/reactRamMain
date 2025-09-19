import React, { useState } from "react";
import UsestateHook from "./component/UsestateHook";
import ConditionalRender from "./component/ConditionalRender";
import ListRendering from "./component/ListRendering";
import Darkmode from "./component/Darkmode";
import Field from "./component/Field";
import MultipleInput from "./component/MultipleInput";
import Form from "./component/Form";
import UseEffectHook from "./component/UseEffectHook";
import Second from "./component/Second";
import Timer from "./component/Timer";
import APIUseeffect from "./component/APIUseeffect";
import UseRefHook from "./component/UseRefHook";

export default function App() {
  const [log, setLog] = useState(true);
  return (
    <div>
      <UseRefHook/>
      <APIUseeffect />
      <Timer />

      {log ? <UsestateHook /> : <ConditionalRender />}
      <button onClick={() => setLog(!log)}>button</button>
      <Second />

      <ListRendering />
      <Darkmode />
      <Field />
      <MultipleInput />
      <Form />
      <UseEffectHook />
    </div>
  );
}
