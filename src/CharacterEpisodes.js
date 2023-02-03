import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CharacterEpisodes({ characterId }) {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => response.json())
            .then(data => {
                const episodeUrls = data.episode;
                const episodePromises = episodeUrls.map(url => fetch(url));
                Promise.all(episodePromises)
                    .then(responses => Promise.all(responses.map(response => response.json())))
                    .then(episodeData => {
                            setEpisodes(episodeData);
                        }
                    );
            });
    }, [characterId]);

    return (
        <table>
            <thead>
            <tr>
                <th>Code</th>
                <th>Nom</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {episodes.map(episode => (
                <tr key={episode.id}>
                    <td>{episode.episode}</td>
                    <td>
                        <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
                    </td>
                    <td>{episode.air_date}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default CharacterEpisodes;