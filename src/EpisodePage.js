
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EpisodeCharacters from './EpisodeCharacters';


export default function EpisodePage({ episode }) {


    const {id} = useParams();
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`)
            .then(response => response.json())
            .then(data => {
                setEpisode(data);
            });
    }, [id]);
    return (
        <div className='episodePageDiv'>
            <h1>{episode.name}</h1>
            <p>{episode.air_date}</p>
            <p>{episode.episode}</p>
            <p>{episode.characters.length} personnages</p>
            <EpisodeCharacters episodeId={episode.id} />
        </div>
    );
}