import React from 'react';
import { useState } from "react";

import Search from '@material-ui/icons/Search';

function Home({ history }) {

    const [playerName, setPlayerName] = useState("");

    const submitSearch = async (e) => {
        e.preventDefault();
        history.push(`/player/${playerName}`)
    }

    return (
        <div className="content">
            <div className="lookup-hero">
                <h1>Hypixel Stat Service</h1>
                <p>Lookup your hypixel stat's for different supported gamemodes.</p>
                <form onSubmit={submitSearch.bind(this)}>
                    <div className="search-container">
                        <input className="player-search" type="text" name="playerName" id="playerName" placeholder="Username to lookup..." value={playerName} onChange={(e) => setPlayerName(e.target.value)}></input>
                        <button type="submit" class="search-button">
                            <Search />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home;