import React from "react";
import { Link, Route,Switch } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);





export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page1">PAGE 1</Link>
          </li>
          <li>
            <Link to="/page2">PAGE 2</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/" exact><Home/></Route>
      <Route path="/page1"><Page1/></Route>
      <Route path="/page2"><Page2/></Route>
      </Switch>
      
    </div>
  );
}
