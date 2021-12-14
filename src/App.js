import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import PageNotFound from "./components/Pagenotfound/PageNotFound";
import Todoapp from './components/TodoApp/Todoapp';

function App() {
  return (
    <Router>
      <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Todoapp />
          </Route>
          <Route path="/">
            <PageNotFound/ >
          </Route>

        </Switch>

    </Router>
);
}

export default App;
