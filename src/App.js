import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";

import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/newMeetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
