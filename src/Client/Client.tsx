import { useState } from 'react';
import Map from '../Map';
import NoteForm from '../NoteForm';


function Client() {
  console.log(' --- Rendered Client ---');

  const [noteActive, setNoteActive] = useState(false);
  const [latlng, setLatlng] = useState('');

  return (
    <div className="Client z-0">
      <Map
        setNoteActive={setNoteActive}
        setLatlng={setLatlng}
      />
      {
        noteActive ?
        <NoteForm
          noteActive={noteActive}
          latlng={latlng}
        />
        :
        null
      }
    </div>
  );
}

export default Client
