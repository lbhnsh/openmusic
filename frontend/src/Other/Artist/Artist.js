import React from "react";
import { Link } from "react-router-dom";
import "./Artist.css";
import { Recent } from "../../HomePage/Recent/Recent";
import { MainHome } from "../../HomePage/MainHome/mainplaylists";
import { Sidebar } from "../../HomePage/Sidebar/Sidebar";
import { Navbar } from "../../HomePage/Navbar/Navbar";
// import { Profile } from "./Profile/Profile";
import Player from "../../HomePage/Player/player";
import { useEffect,useState } from "react";
import text from "../../HomePage/text.json"
export const Artist = (props) => {
    useEffect(() => {
        const handleMouseMove = (e) => {
          const cursor = document.querySelector('.blur');
          if (cursor) {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
          }
        };
    
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    return (
        <div className="AuserPage">
        <div className="Ablur"/>   
        <Navbar />
        {/* <Profile /> */}
        <Sidebar />
        <Player />
        
        <div className="Atop-songs-artist">
        <div className="Atop-songs-heading">Top songs:</div>
        <div className="Atop-songs-container">
          {props.topSongs.map((item, index) => (
            <Link to='/topsongs' key={index}>
              <div className="Aartist-board"
                key={index}>
                <img className="Amodel" alt="Model" src={item.images[0].url} />
                <div className="Aartist">{item.name}</div>
                <div className="Asong">{item.artists[0].name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
        
        <div className="Aplaylists-artist">
        <div className="Aplaylist-boards-heading">Recent Albums:</div>
        <div className="Aplaylist-boards">
        {props.suggestedSongs.map((item, index) => (
            <Link to="/playlists">
            <div
            className="Aartist-board"
            key={index} >
            <img className="Amodel" alt="Model" src="model.png" />
            <div className="Asong">{item.artistName}</div>
            <div className="Aartist">{item.songName}</div>
            </div>
            </Link>
      ))}
    </div></div>
        </div>
            

  );
};