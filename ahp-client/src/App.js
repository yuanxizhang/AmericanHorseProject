import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HorseCardSmall from './components/HorseCards/HorseCardSmall';
import HorseCardLarge from './components/HorseCards/HorseCardLarge';
import Header  from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// This should house your browserRouter 
function App() {
  

  return (
      
<div className="App">
    <Header />
    <Navbar />
    <Footer />
</div>

      <BrowserRouter>

        <Switch>
          <Route exact path="/horsecardsmall" component={HorseCardSmall} />
          <Route exact path="/horsecardlarge" component={HorseCardLarge} />

        </Switch>

      </BrowserRouter>


    );

};

export default App;
