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

function App() {
  return (
    <div>
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
          <Route path="/showCar/:carId">
            <ShowCarDetails></ShowCarDetails>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/addCar">
            <AddCar></AddCar>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
