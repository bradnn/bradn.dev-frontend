import React from "react";
import { useState, useEffect } from "react";
import emoji from 'react-easy-emoji';
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';

import Done from "@material-ui/icons/Done";

const Account = ({ history }) => {
  const [user, setUser] = useState({
    connectedAccounts: {},
    ownedEmojis: [],
    ownedFonts: []
  });
  const [hexColor, setHexColor] = useState("");

  const setColor = async (e) => {
    e.preventDefault();
    var hex = hexColor;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.post('/api/v1/user/setcolor', {
        hex
      }, config)
      if (data.success === true) {
        toast.success("Color has been set to " + hex, {
          position: "bottom-right"
        });
        document.documentElement.style.setProperty(`--primary-color`, hex);
        return;
      }
    } catch (error) {
      setHexColor("")
      if (error.response.status === 403) {
        toast.error("You need premium to use this feature.", {
          position: "bottom-right"
        });
      } else if (error.response.status === 422) {
        toast.error("Please supply a valid HEX code.", {
          position: "bottom-right"
        });
      }
    }
  }

  const setEmoji = async (e) => {
    var emoji = e.target.alt || e.target.outerText
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
        const { data } = await axios.post("/api/v1/user/setemoji", {
            emoji: emoji
        }, config);
        if (data.success) {
          toast.success("Emoji has been changed to " + emoji, {
            position: "bottom-right"
          });
          return;
        }
    } catch (error) {
        history.push('/account')
    }
  }

  const setFont = async (e) => {
    var font = e.target.style.fontFamily;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };

    try {
      const { data } = await axios.post("/api/v1/user/setfont", {
          font
      }, config);
      if (data.success) {
        toast.success("Font has been changed to " + font, {
          position: "bottom-right"
        });
        return;
      }
  } catch (error) {
      history.push('/account')
  }
  }

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/register");
      return;
    }

    const fetchAccountData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/v1/user/", config);
        setUser(data.data);

        
      } catch (error) {
        history.push("/");
      }
    };
    fetchAccountData();
  }, [history]);

  return (
    <div className="content no-space">
      <ToastContainer />
      <div className="card-page">
        <div className="left-side">
          <div className="card small-card">
            <div className="card-header">{user.username}</div>
            <div className="card-body">
              <div className="card-row first">
                <div className="row-head">Premium</div>
                <div className="row-body">
                  {user.premium ? "True" : "False"}
                </div>
              </div>
            </div>
          </div>
          <div className="card small-card">
            <div className="card-header">Linked Accounts</div>
            <div className="card-body">
              <div className="card-row first">
                <div className="row-head">Minecraft</div>
                <div className="row-body">
                  {user.connectedAccounts?.minecraft
                    ? user.connectedAccounts.minecraft.map(uuid => (
                      <span>{ uuid } <br /></span>
                    ))
                    : "None"}
                </div>
              </div>
            </div>
          </div>

          <div className="card small-card">
            <div className="card-header">Account Addons</div>
            <div className="card-body">
              <div className="card-row first">
                <div className="row-head">Change website color</div>
                <div className="row-body">
                  <form onSubmit={setColor.bind(this)}>
                    <input
                      className="player-search"
                      type="text"
                      name="playerName"
                      id="playerName"
                      placeholder="Color to apply..."
                      value={hexColor}
                      onChange={(e) => setHexColor(e.target.value)}
                    ></input>
                    <button type="submit" className="search-button">
                      <Done />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-side">
        <div className="card">
            <div className="card-header">Choose Emoji</div>
            <div className="card-body">
                <div className="emoji-container">
                    <button className="emoji-box" onClick={setEmoji}>
                        <div className="emoji">
                            { emoji('None') }
                        </div>
                    </button>

                    {user.ownedEmojis.map(name => (
                        <button className="emoji-box" onClick={setEmoji}>
                            <div className="emoji">
                                { emoji(name) }
                            </div>
                        </button>
                    ))}
                </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">Choose Font</div>
            <div className="card-body">
                <div className="font-container">
                    <button className="font-box" onClick={setFont}>
                        <div className="font" style={{fontFamily: 'Raleway'}}>{user.username}</div>
                    </button>
                    {user.ownedFonts.map(font => (
                    <button className="font-box" onClick={setFont}>
                        <div className="font" style={{fontFamily: font}}>{user.username}</div>
                    </button>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
