import { useRoutes } from "react-router-dom";
import routes from "./routes/Routes";
import { useEffect } from "react";

const App = () => {

  return (
    <>
      {useRoutes(routes)}
    </>
  );
};

export default App;
