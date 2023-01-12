import "./App.css";
import Home from "./components/Home";
import { PostmanContextProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      <PostmanContextProvider >
        <Home />
      </PostmanContextProvider>
    </div>
  );
}

export default App;
