import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HorseCardSmall from './components/HorseCards/HorseCardSmall';
import HorseCardLarge from './components/HorseCards/HorseCardLarge';
import Header  from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// This should house your browserRouter 
const App=() => {
  

  return (

      <BrowserRouter>

        <Switch>
          <Header/>
          <Navbar />
          <Route exact path="/horsecardsmall" component={HorseCardSmall} />
          <Route exact path="/horsecardlarge" component={HorseCardLarge} />
          <Footer /> 
        </Switch>

      </BrowserRouter>


    );

};

export default App;
