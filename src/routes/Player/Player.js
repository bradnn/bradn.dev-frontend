import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import emoji from 'react-easy-emoji';
import axios from 'axios';
import StatsPage from './components/StatsPage';
import PlayerNotFound from './components/PlayerNotFound';
import moment from 'moment';

const Player = ({ history }) => {

    const [nameHistory, setNameHistory] = useState("");
    const [userData, setUserData] = useState({});
    const [accountData, setAccountData] = useState("");
    const [duelsStats, setDuelsStats] = useState({
        overall: {},
        uhc1v1: {},
        uhc2v2: {},
        uhc4v4: {},
        op1v1: {},
        op2v2: {},
        sumo: {},
        skywars1v1: {},
        skywars2v2: {},
        bridge1v1: {},
        bridge2v2: {},
        bridge4v4: {}
    });
    const { player } = useParams();


    useEffect(() => {

        const fetchUserData = async () => {
            try {
                const { data } = await axios.get("/api/v1/userdata/" + player);
                setUserData(data.data);
                setDuelsStats(data.data.stats.duels);
                setAccountData(data.data.account);
                var userData = data.data;
                if (data.data.account.registered === true) {
                    if (data.data.account.data.fontfamily) {
                        document.getElementById("user-title").style.fontFamily = `'${data.data.account.data.fontfamily}',monospace`;
                    }
                }

                const nameHistory = userData.nameHistory.reverse();
                var nameNum = nameHistory.length;
                var nameHistoryVal = ``;

                function timeSince(date) {
                    return moment(date).fromNow();
                }

                for (var name in nameHistory) {
                    var date = new Date(nameHistory[name].changedToAt)
                    if (date.toString() === "Invalid Date") {
                        date = ""
                    } else {
                        date = timeSince(date);
                    }
                    nameHistoryVal += `<div><span class="name-number">${nameNum}</span><span class="name">${nameHistory[name].name}</span><span class="date">${date}</span></div>`;
                    nameNum--;
                }
                setNameHistory(nameHistoryVal);

            } catch (error) {
                
            }
        }

        fetchUserData();
    }, [history, player]);

    return (
        <div className="content no-space">
            {accountData.registered === true ? <div className="user-title" id="user-title">{accountData.data.username}<span className="title-emoji">{accountData.data.emoji ? emoji(accountData.data.emoji) : ""}</span></div> : <div> </div> }
            {userData ? 
            <StatsPage 
                userData={userData} 
                nameHistory={nameHistory} 
                duelsStats={duelsStats} 
            />
            : <PlayerNotFound />}
        </div>
    )
}

export default Player;