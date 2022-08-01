import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom"

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
}

function NavBar() {
  return (
    <div>
      <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue"}} >
        Home
      </NavLink>
      <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "darkblue"}} >
        About
      </NavLink>
      <NavLink to="/login" exact style={linkStyles} activeStyle={{background: "darkblue"}} >
        Login
      </NavLink>
      <NavLink to="/signUp" exact style={linkStyles} activeStyle={{background: "darkblue"}} >
        Signup
      </NavLink>
      <NavLink to="/messages" exact style={linkStyles} activeStyle={{background: "darkblue"}} >
        Messages
      </NavLink>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  )
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type={"text"} name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

function SignUp() {
  return (
    <div>
      <h1>Signup</h1>
    <form>
      <div>
        <input type={"text"} name="signup" placeholder="Create Username..." />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    </div>
  )
}



function Messages() {
  return (
    <div>
      <h1>Messages</h1>
    <form>
      <div>
        <input type={"text"} name="username" placeholder="Username" />
      </div>
      <div>
        <textarea type="text" name="message" placeholder="Write message here.." ></textarea>
      </div>
      <input type="submit" value="Submit" />
    </form>
    </div>
    
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}



ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>,
document.getElementById("root")
);