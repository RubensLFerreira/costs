import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import NovoProjeto from "./pages/NovoProjeto";
import Projetos from "./pages/Projetos";

import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projetos">
            <Projetos />
          </Route>
          <Route exact path="/empresa">
            <Empresa />
          </Route>
          <Route exact path="/contato">
            <Contato />
          </Route>
          <Route exact path="/novoprojeto">
            <NovoProjeto />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;