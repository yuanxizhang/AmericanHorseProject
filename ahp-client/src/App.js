import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {HorseCardSmall} from './components/HorseCards/HorseCardSmall';
import {HorseCardLarge} from './components/HorseCards/HorseCardLarge';

// This should house your browserRouter 
function App() {
  return (

    <BrowserRouter>
      <Switch>
      <Route exact path="/horsecardsmall" component={HorseCardSmall} />
      <Route exact path="/horsecardlarge" component={HorseCardLarge} />

      </Switch>
    </BrowserRouter>

  );
}

export default App;
