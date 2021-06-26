import './App.css';
import Header from './Header'
import ChatScreen from './ChatScreen'
import TinkerCards from './TinderCards'
import Chats from './Chats'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SwipeButtons from './SwipeButtons'
function App() {
  return (
    <div className="App">

  <Router>


    {/* <Header/> */}

    <Switch>

    <Route path="/chats/:person">
    <Header backButton='/chats' />
    <ChatScreen/>
</Route>
    <Route path="/chats">
    <Header backButton='/' />
<Chats/>
</Route>
      <Route path="/">
      <Header/>
<TinkerCards/>
      </Route>
    </Switch>
  </Router>
<SwipeButtons/>
    </div>
  );
}

export default App;
