import React from "react";

interface Iprops {
  test: string;
}

const App: React.FunctionComponent<Iprops> = ({ test }) => {
  return <div className="App" />;
};

export default App;
