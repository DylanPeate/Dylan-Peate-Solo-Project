import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Pictures from './components/Pictures';
import PictureMenu from './components/PictureMenu';
import PictureEditForm from './components/PictureEditForm'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <Pictures />
          </Route>
          <Route path='/picture/:pictureId'>
            <PictureMenu />
          </Route>
          <Route exact path='/picture/:pictureId/edit'>
            <PictureEditForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
