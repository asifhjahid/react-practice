import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom"
import About from "./components/Router/About"
import Dashboard from "./components/Router/Dashboard"
import Error from "./components/Router/Error"
import Home from "./components/Router/Home"
import Navbar from "./components/Router/Navbar"
import Posts from "./components/Router/Posts"
import Services from "./components/Router/Services"

export default function App() {
  const isLoggedIn = true;
  return (

    <div>
      
      <Router>
      <Navbar />
      <Switch>
     
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services'>
          <Services number='10' />
        </Route>
        <Route path='/posts/:category/:topic' component={Posts} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login'>
          {isLoggedIn ? <Redirect to='/dashboard' /> : <Home />}
        </Route>
        <Route component={Error} />
        </Switch>
    </Router>
    </div>
  )
}
