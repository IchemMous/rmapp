import React from 'react'
import {useLocation, Navigate} from 'react-router-dom';
import {UserContext} from '../context/userContext';
import {useContext} from 'react';


export default function WelcomePage(){
    const {currentUser} = useContext(UserContext);
    return (
        <h1>{currentUser ? "Welcome to Rick and Morty" : "Sign In or Sign Up !!"}</h1>
        
    )
}