import { useState } from "react";
import {  Button, Header, Form, Input } from "semantic-ui-react";
import { useGlobalStateUpdate } from '../Provider';

export default function MainPage()  {

  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');
  const [openForm, setOpenForm] = useState('');

  const { addMusicData } = useGlobalStateUpdate();

  const handleAddMusic = () => {
    addMusicData(songTitle, artist, description);
    setSongTitle('');
    setArtist('');
    setDescription('');
    setOpenForm('');
  };

  const handleFormDisplay = () => {
    setOpenForm('yes');
  }

  return (
    <section className="MainPage">
      <div className="mainpage-content">
        <Header
          size="huge"
          content="Make your party fun!"
          className="hero-header"
        />

        <p>Create your own custom playlist today.</p>

        <Button
          content='Create playlist'
          color="orange"
          className="orange-button"
          onClick={handleFormDisplay}
        />
        {openForm === 'yes' && (
        <div className="tooltip"> 
          <div>
            <Form>
              <Form.Field>
                <Input 
                  placeholder='Song Title'
                  value={songTitle}
                  onChange={(e) => setSongTitle(e.target.value)}
                   />
              </Form.Field>

              <Form.Field>
                <Input 
                  placeholder="Artist"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                />
              </Form.Field>

              <Form.Field>
                <Input 
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                   />
              </Form.Field>

              <Button color="green" onClick={handleAddMusic}>Add Music</Button>
              
              <Button color="red" onClick={() => setOpenForm('')}>Cancel</Button>
            </Form>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}