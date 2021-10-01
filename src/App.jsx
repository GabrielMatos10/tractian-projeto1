import { BrowserRouter } from "react-router-dom";
import Graphs from "./components/Graphs/Graphs";
import Header from "./components/Template/Header";
import Routes from "./Routes";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes />
        </div>

    </BrowserRouter>
  );
}

export default App;
