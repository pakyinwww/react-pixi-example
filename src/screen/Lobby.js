import React from "react";
import "../../node_modules/video-react/dist/video-react.css";
import { Player } from "video-react";
import PixiCanvas from "./../component/PixiCanvas";
import styles from './Lobby.css'


const Lobby = () => {
  return (
    <>
      <Player className={styles.player}>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
      <PixiCanvas>

      </PixiCanvas>
    </>
  );
};

export default Lobby;

