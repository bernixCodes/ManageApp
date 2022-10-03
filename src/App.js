import "./App.css";
import Header from "./component/Header/Index";
import "@fontsource/mulish";
import Home from "./Views/Home/Index";
import Footer from "./component/Footer/Index";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
