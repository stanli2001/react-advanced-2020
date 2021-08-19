import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/stanli2001";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  const [userurl, setUserurl] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login, html_url } = user;
        setIsLoading(false);
        setUser(login);
        setUserurl(html_url);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  return (
    <div>
      <h3> visit </h3>
      <a href={userurl} target="_blank" rel="noopener noreferrer">
        <h3>{user}</h3>
      </a>
    </div>
  );
};

export default MultipleReturns;
