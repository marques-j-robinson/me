import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Container from "react-bootstrap/Container";
import Header from "./Header.js";
import NavBar from "./NavBar";

// Pages
import AboutPage from "../pages/About";
import ArtPage from "../pages/Art";
import MusicPage from "../pages/Music";
import NotFoundPage from "../pages/NotFound";
import SoftwarePage from "../pages/Software";

function App() {
  return (
    <>
      <main className="flex-fill">
        <Router basename="/me">
          <Container>
            <Header />
            <NavBar />
            <Switch>
              <Route path="/" exact component={AboutPage} />
              <Route path="/software" component={SoftwarePage} />
              <Route path="/music" component={MusicPage} />
              <Route path="/art" component={ArtPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </Router>
      </main>
      <footer className="flex-shrink-0 text-center">
        <p>marques.j.robinson@gmail.com</p>
      </footer>
    </>
  );
}

export default App;
