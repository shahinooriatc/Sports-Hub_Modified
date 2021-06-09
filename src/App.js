import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import TeamDetails from './Component/TeamDetails/TeamDetails';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  return (
    <div className="App">


      <Router>
        <Switch>

          <Route path='/Home' component={Home} />
          <Route exact path='/' component={Home} />


          <Route path='/TeamDetails/:idTeam'>
            <TeamDetails />
          </Route>

          <Route path='*' component={NoMatch} />
        </Switch>
      </Router>

    </div>
  );
}
export default App;
