import { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import Loader from "./components/Loader";

const HomePage = lazy(() =>
  import("./pages/HomePage")
);

const MoviesPage = lazy(() =>
  import("./pages/MoviesPage")
);

const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage")
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.moviesDetails} component={MovieDetailsPage} />
          <Route path={routes.movies} component={MoviesPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;