import Output from "./components/Output";
import TipOptions from "./components/TipOptions";
import TipContextProvider from "./contexts/Tip";

function App() {
  return (
    <>
      <h2 className="title">
        SPLI <br /> TTER
      </h2>
      <div className="App">
        <TipContextProvider>
          <TipOptions />

          <Output />
        </TipContextProvider>
      </div>
    </>
  );
}

export default App;
