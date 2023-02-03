import React, {useEffect, useState} from 'react';
import Character from './Character';
import Cookies from "js-cookie";

function RecentFavoritesList() {
    const [characters, setCharacters] = useState([]);

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
    const sortedCharacters = characters.sort((a, b) => {
        b.favoriteDate = Cookies.get(`favorite-date-${b.id}`);
        a.favoriteDate = Cookies.get(`favorite-date-${a.id}`);
        return b.favoriteDate - a.favoriteDate;
    });

    const recentFavorites = sortedCharacters.slice(0, 5);

    return (
        <div>
            <h2>Derniers personnages favoris</h2>
            {recentFavorites.map(character => (
                <Character key={character.id} character={character} />
            ))}
        </div>
    );
}

export default RecentFavoritesList;