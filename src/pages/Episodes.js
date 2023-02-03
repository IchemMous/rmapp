import React, { Fragment, useState, useEffect } from "react";
import Link from "react";
import axios from 'axios';






export default function EpisodeList() {


    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(response => response.json())
            .then(data => {
                const allEpisodes = data.results;
                setData(allEpisodes);
                console.log(allEpisodes);
            });
    }, []);

            


    return (
        <Fragment>
            <h2>Liste des épisodes</h2>
            <ul>
                {data.map(episode => (
                    <li key={episode.id}>
                        {episode.episode} - {episode.name} ({episode.air_date})
                    </li>
                ))}
            </ul>
        </Fragment>
    );

  }