import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="class-container">
      <SideBar />
      <div className="content">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
