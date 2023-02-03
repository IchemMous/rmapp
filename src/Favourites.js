import React, {useEffect, useState, useContext} from 'react';
import Cookies from 'js-cookie';
import Character from './Character';
import {useLocation, Navigate} from 'react-router-dom';
import {UserContext} from './context/userContext';
export default function Favourites() {
    const [characters, setCharacters] = useState([]);
    const {currentUser} = useContext(UserContext);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                    const allCharacters = data.results;
                    const favoriteCharacters = [];
                    for (let i = 0; i < allCharacters.length; i++) {
                        const favoriteCookie = Cookies.get(`favorite-${allCharacters[i].id}`);
                        if (favoriteCookie) {
                            favoriteCharacters.push(allCharacters[i]);
                        }
                    }
                    setCharacters(favoriteCharacters);
                }
            );
    }, []);

    if(!currentUser){
        return <Navigate to="/signin"/>
    }
    

    return (
        <div>
            <h2>Persos favoris</h2>
            {characters.map(character => (<Character key={character.id} character={character} /> ))}
        </div>
    );
}