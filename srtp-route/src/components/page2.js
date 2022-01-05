import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Person from "./Person";

export default function page2({ match }) {
  const data = [
    {
      id: 1,
      name: "Petch",
      status: "active",
    },
    {
      id: 2,
      name: "yok",
      status: "De-activate",
    },
    {
      id: 3,
      name: "settapak",
      status: "active",
    },
    {
      id: 4,
      name: "Chanunn",
      status: "De-activate",
    },
  ];

  const { url } = useRouteMatch();
  const linkList = data.map((person) => {
    return (
      <li key={person.id}>
        <Link to={`${url}/${person.id}`}>{person.name}</Link>
      </li>
    );
  });
  return (
    <div>
      {/* Person display a list */}

      <div>
        <h3>Person</h3>
        <ul>{linkList}</ul>
      </div>
      <Route to={`${url}/:personId`}>
        <Person data={data} />
      </Route>
      <Route to={url}>
        <p>select..</p>
      </Route>
    </div>
  );
}
