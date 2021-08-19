import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUser] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // console.log(users);
    setUser(users);
  };

  //by default userEffect will be fired for every render
  //this behavior will create an inifinte loop because the setUser function inside getUsers will force re-render the page
  //to fix that, pass a second argument, an array, to useEffect, which for this page is an empty array
  //This second argument acts like an anchor, which changes the default behavior of the useEffect.
  //With the second argument, userEffect won't be fired unless the value of the second argument is changed
  //If the second argument is an empty array it means userEffect will be fired for the initial render
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
