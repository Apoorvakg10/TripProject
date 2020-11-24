import { BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Assignment_1/home/Home';
import Login from './Assignment_1/login/Login';
 import Register from './Assignment_1/register/Register';
 import Contact from './Assignment_1/contactus/Contact'
import Trip from './Assignment_1/trippackage/Trip';


function App() {
  return (
    <div className="App">
      <Router>

      <nav  className="navbar navbar-inverse">
  <div  className="container-fluid">
    <div  className="navbar-header">
      <Link  className="navbar-brand" to="/">MyTrip</Link>
    </div>
    <ul  className="nav navbar-nav">
      <li className="active"><Link to="/home">Home</Link></li>
      <li><Link to="/contactus">Contact Us</Link></li>
      
      <li><Link to="/trippackage">Trip </Link></li>
    </ul>
    <ul  className="nav navbar-nav navbar-right">
      <li><Link to="/login"><span  className="glyphicon glyphicon-user"></span> Login</Link></li>
      <li><Link to="/register"><span  className="glyphicon glyphicon-log-in"></span> Register</Link></li>
    </ul>
  </div>
</nav>
      <Switch>    
      <Route path="/home"  component={Home}/>
     <Route path="/login"  component={Login}/>
     <Route path="/register"  component={Register}/>
      <Route path="/trippackage"  component={Trip}/>
      <Route path="/contactus"  component={Contact}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
