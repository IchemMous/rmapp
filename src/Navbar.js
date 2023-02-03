import { Link, useMatch, useResolvedPath } from "react-router-dom"
import {UserContext} from './context/userContext';
import {signOut} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import {auth} from './firebase-config';
import React, {useContext} from 'react';

export default function Navbar() {
  const {toggleModals} = useContext(UserContext);
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth);
      toggleModals();
      navigate('/welcome');
    } catch (error) {
      alert("Retry later");
    }
  }
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        RickAndMorty
      </Link>
      <ul>
        <CustomLink to="/favourites">Favourites</CustomLink>
        <CustomLink to="/episodes">Episodes</CustomLink>
        <CustomLink to="/signup">Sign up</CustomLink>
        <CustomLink to="/signin">Sign in</CustomLink>
        <CustomLink to="/welcome">Welcome</CustomLink>
        <button onClick={logOut}>LogOut</button>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}