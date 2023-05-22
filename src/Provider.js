import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();
const GlobalStateUpdateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [musicData, setMusicData] = useState([
    {songTitle: 'Unavailable', artist: 'Davido', description: 'Obo Baddest'},
    {songTitle: 'For my hand', artist: 'Burna boy', description: 'Oluwa Burna'},
    {songTitle: 'Somebody\'s son', artist: 'Tiwa Savage', description: 'Number One African Badgirl'},
    {songTitle: 'Yoga', artist: 'Asake', description: 'Olalade mi Asake', },
    {songTitle: 'Believe me', artist: 'Johnny Drille', description: 'Is Don Jazzy'},
    {songTitle: 'Acapulco', artist: 'Jason Derulo', description: 'It\'s Jason Derulo'},
    {songTitle: 'Kpe Paso', artist: 'Wande Coal ft Olamide', description: 'Black diamond'},
  ]);

  const addMusicData = (songTitle, artist, description) => {
    const newMusicEntry = {
      songTitle,
      artist,
      description,
    };
    setMusicData((prevData) => [...prevData, newMusicEntry]);
  };

  return (
    <GlobalStateContext.Provider value={musicData}>
      <GlobalStateUpdateContext.Provider value={{ addMusicData, musicData }}>
        {children}
      </GlobalStateUpdateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => useContext(GlobalStateContext);
const useGlobalStateUpdate = () => useContext(GlobalStateUpdateContext);

export { GlobalStateProvider, useGlobalState, useGlobalStateUpdate };
