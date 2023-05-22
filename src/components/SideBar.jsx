import { useState } from "react";
import { Button, Header,} from "semantic-ui-react";
import { useGlobalState } from '../Provider';

export default function SideBar() {

  const [hoveredSong, setHoveredSong] = useState(null);
  const musicData = useGlobalState();

  const handleMouseEnter = (song) => {
    setHoveredSong(song);
  }

  const handleMouseLeave = () => {
    setHoveredSong(null);
  }

  return (
    <section className="SideBar">
      <div>
        <Header 
          as={'h2'}
          content={'Trending songs'}
          className="hero-header"
        />
      </div>

      <div className="trending-music-wrapper">
        {musicData.map((song, i) => {
          return (
          <div className="song" 
            key={i}
            onMouseEnter={() => handleMouseEnter(song.songTitle)}
            onMouseLeave={handleMouseLeave}
          >

            <Button
                icon="plus"
                content={<span>{song.songTitle} <span className="artist">{song.artist}</span></span>}
                labelPosition="right"
                className="primary-add-button"
              />
              {hoveredSong === song.songTitle && (<div className="tooltip">{song.description}</div>)}
          </div>
        )})}
      </div>

      <div>
        <Button
          color="orange"
          content="View more"
          className="orange-button-no-border"
        />
      </div>
    </section>
  )
}