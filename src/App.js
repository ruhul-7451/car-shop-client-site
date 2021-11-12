import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Reviews from './pages/Reviews/Reviews';
import Login from './pages/shared/Login/Login';
import AddCar from './pages/AddCar/AddCar';
import ShowCars from './pages/ShowCars/ShowCars';
import ShowCarDetails from './pages/ShowCars/SingleCar/ShowCarDetails/ShowCarDetails';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            <Route path="/buyCars">
              <ShowCars></ShowCars>
            </Route>
            <PrivateRoute path="/showCar/:carId">
              <ShowCarDetails></ShowCarDetails>
            </PrivateRoute>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <PrivateRoute path="/addCar">
              <AddCar></AddCar>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
