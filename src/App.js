import './App.css';
import Header from './Header'
import TinkerCards from './TinderCards'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
  <Header/>

  <Router>
    {/* <Header/> */}

    <Switch>
    <Route path="/chats">
<h1>I am chatpage</h1>
</Route>
      <Route path="/">
<TinkerCards/>
      </Route>
    </Switch>
  </Router>
{/* {Header} */}
{/* {Tinder Cards} */}
{/* {Buttons below tinder cards} */} 
{/* {Chatscreen} */}
    </div>
  );
}

export default App;
