import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import InitialTransition from "./components/animations/InitialTransition";

function App() {
  return (
    <BrowserRouter>
      <InitialTransition />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
