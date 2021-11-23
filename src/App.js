import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="app">
            <Nav />
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
