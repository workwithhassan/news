import { useState, useEffect } from "react";

const UseUserHook = () => {
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("isLogin", true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setIsLoggedIn(false);
  };

  const addNewUser = (user) => {
    const updatedUsers = [...users, user];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isLogin = localStorage.getItem("isLogin") || false;
    setUsers(localUsers);
    setIsLoggedIn(isLogin);
  }, []);

  return {
    users,
    addNewUser,
    handleLogin,
    handleLogout,
    isLoggedIn,
  };
};

export default UseUserHook;
