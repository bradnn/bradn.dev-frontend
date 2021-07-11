import React from "react";
import axios from "axios";
import emoji from 'react-easy-emoji';
import { useState, useEffect } from "react";

const TopPlayers = ({ history }) => {
    const [topData, setTopData] = useState([]);

    useEffect(() => {
        
        const fetchTopData = async () => {
            try {
                const { data } = await axios.get("/api/v1/lookup/");
                setTopData(data.data);
            } catch (error) {
                history.push("/");
            }
        };
        fetchTopData();
    }, [history]);

    return (
        <div className="content">
        <h1>Most searched users</h1>
        <p>A list of the most searched user's accounts. You must be signed up to appear on this list.</p>
            <div className="top-container">
                {topData.map(name => (
                    <div className="card small-card">
                        <div className="card-header">
                            {name.accountName} {emoji(name.emoji) || ""}
                        </div>
                        <div className="card-body">
                                <div className="card-row first">
                                    <div className="row-head">Lookups</div>
                                    <div className="row-body"><strong>Lifetime: </strong>{ name.lookups }</div>
                                </div>
                                <div className="card-row">
                                    <div className="row-head">Owned Accounts</div>
                                    <div className="row-body">
                                        {name.ownedAccounts.map(accountName => (
                                            <span>{accountName} <br /></span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-row">
                                    <div className="row-head">Account Details</div>
                                    <div className="row-body">
                                    <strong>Premium: </strong>{ name.premium ? "True" : "False" }<br />
                                    <strong>Owned Emojis: </strong>{ name.ownedEmojis }<br />
                                    </div>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopPlayers;