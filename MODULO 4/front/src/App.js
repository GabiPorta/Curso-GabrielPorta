import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Header>
        <Nav />
        <Switch>
          <Route path="/" exact component={homePage} />
          <Route path="/nosotros" exact component={nosotrosPage} />
          <Route path="/especies" exact component={especiesPage} />
          <Route path="contacto" exact component={contactoPage} />
        </Switch>
      </Header>
    </Router>
  );
}

export default App;
