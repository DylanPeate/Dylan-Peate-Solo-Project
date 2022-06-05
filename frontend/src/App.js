import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Pictures from './components/Pictures';
import PictureMenu from './components/PictureMenu';
import PictureEditForm from './components/PictureEditForm'
import PictureCreation from "./components/PictureCreation";
import SplashPage from './components/SplashPage'
import { getPictures } from "./store/pictures";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector(state => state.session.user)
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getPictures())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/picture/create'>
            {sessionUser ? <PictureCreation /> : <SignupFormPage />}
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            {sessionUser ? <Pictures /> : <SplashPage />}
          </Route>
          <Route exact path='/picture/:pictureId'>
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
