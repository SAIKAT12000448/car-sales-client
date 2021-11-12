
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Addproducts from './Components/Addproducts/Addproducts';
import Home from './Components/CarHome/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Explore from './Components/Explore/Explore';
import Purchase from './Components/Explore/Purchase/Purchase';
import AuthProvider from './Components/Login/Context/AuthProvider';
import PrivateRoute from './Components/Login/hooks/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route exact path="/home">
         <Home></Home>
        </Route>
      <Route path="/login">
            <Login></Login>
      </Route>
      <Route path="/register">
    <Register></Register>
      </Route>
      <Route path="/explore">
           <Explore></Explore>
      </Route>

      <Route path="/addproducts">
          <Addproducts></Addproducts>
      </Route>

      <Route path="/dashboard">
          <Dashboard></Dashboard>
      </Route>

      <PrivateRoute path="/purchase/:perid">
          <Purchase></Purchase>
      </PrivateRoute>
      </Switch>
      
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
