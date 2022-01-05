import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Page1 = () => {
    const { url, path } = useRouteMatch();
    return (
        <div>
          <ul>
            <li>
              <Link to={`${url}/newfolder`}>newfolder</Link>
            </li>
            <li>
              <Link to={`${url}/newfolder2`}>newfolder2</Link>
            </li>
            <li>
              <Link to={`${url}/newfolder3`}>newfolder3</Link>
            </li>
          </ul>
          <Route path={`${path}/:name`}>
            <Item />
          </Route>
        </div>
      );
  };


const Item = () => {
    const { name } = useParams();
    console.log(name);
    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
  };

  
export default  Page1;
