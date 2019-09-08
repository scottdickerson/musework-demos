import React, { Fragment, useState } from "react";
import "./App.css";
import DemoPane from "./DemoPane";
import DemoFrame from "./DemoFrame";

const App = () => {
  const [iFrameURL, setIFrameURL] = useState();
  return (
    <div className="App">
      {iFrameURL ? (
        <DemoFrame url={iFrameURL} onClose={() => setIFrameURL(null)} />
      ) : (
        <Fragment>
          <h1>Musework Demos</h1>
          <div className="Demos">
            <DemoPane
              img="demoshots/rockabilly.png"
              onClick={() => setIFrameURL("http://localhost:3000")}
            />
            <DemoPane
              img="demoshots/journey.png"
              onClick={() =>
                setIFrameURL("http://localhost:3002/Unit29Title.html")
              }
            />
            <DemoPane
              img="demoshots/rockabilly.png"
              onClick={() => setIFrameURL("http://localhost:3000")}
            />
            <DemoPane
              img="demoshots/rockabilly.png"
              onClick={() => setIFrameURL("http://localhost:3000")}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default App;
