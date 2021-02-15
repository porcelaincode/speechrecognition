import './App.css';
import FooterContainer from "./components/FooterContainer";
import MetaFooterContainer from "./components/MetaFooterContainer";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="App">
      <MainContainer />
      <MetaFooterContainer/>
      <FooterContainer />
    </div>
  );
}

export default App;
