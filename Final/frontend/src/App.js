import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import homePage from './pages/homePage';
import nosotrosPage from './pages/nosotrosPage';
import especiesPage from './pages/especiesPage';
import contactoPage from './pages/contactoPage';
import novedadesPage from './pages/novedadesPage';

function App() {
  return (
   <Router>
     <Header/>
     <Nav/>
     <Footer/>
     <Switch>
       <Route path="/" exact component={homePage} />
       <Route path="/nosotros" exact component={nosotrosPage} />
       <Route path="/especies" exact component={especiesPage} />
       <Route path="/contacto" exact component={contactoPage} />
       <Route path="/novedades" exact component={novedadesPage} />
     </Switch>
   </Router>
  );
}

export default App;
