import { Link } from 'react-router-dom';
import FavButton from "./FavButton";
import './Character.css';
import React from 'react';
import {useLocation, Navigate} from 'react-router-dom';
import {UserContext} from './context/userContext';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

function Character({ character }) {

    const {currentUser} = useContext(UserContext);

    if(!currentUser){
        return <div>
        <Link to={`/characters/${character.id}`}>
            <img src={character.image} alt={character.name} className='character-icon rounded-circle'/>
            {character.name}
        </Link>
        </div>
    }

    return (
        <div>
            <Link to={`/characters/${character.id}`}>
                <img src={character.image} alt={character.name} className='character-icon rounded-circle'/>
                {character.name}
            </Link>
            <FavButton character={character}/>
        </div>
    );
}

export default Character;