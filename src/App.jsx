import { useState } from "react";
import TabComp from "./components/TabComp";
import FormComp from "./components/FormComp";

function App() {
  const [change, setchange] = useState(0);

  return (
    <>
      <div className="  flex  h-screen w-screen items-center justify-center  bg-blue-400 ">
        <div className="w-[800px] rounded-2xl border bg-white p-4">
          <FormComp setchange={setchange} />
          <TabComp change={change} setchange={setchange} />
        </div>
      </div>
    </>
  );
}

export default App;
