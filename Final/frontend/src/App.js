import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import EspeciesPage from './pages/EspeciesPage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
   <Router>
     <Header/>
     <Nav/>
     <Footer/>
     <Switch>
       <Route path="/" exact component={HomePage} />
       <Route path="/nosotros" exact component={NosotrosPage} />
       <Route path="/especies" exact component={EspeciesPage} />
       <Route path="/contacto" exact component={ContactoPage} />
       <Route path="/novedades" exact component={NovedadesPage} />
     </Switch>
   </Router>
  );
}

export default App;
