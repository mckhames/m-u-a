import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

import AllMeetupsPage from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";

function App() {
  return (
    <div>

      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route path="/new-meetups" exact> 
          <NewMeetupsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
