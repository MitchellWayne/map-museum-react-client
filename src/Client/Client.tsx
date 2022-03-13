import { useState } from 'react';
import Map from '../Map';
import NoteForm from '../NoteForm';


function Client() {
  // const [seriesActive, setSeriesActive] = useState(false);
  const [noteActive, setNoteActive] = useState(false);
  const [latlng, setLatlng] = useState('');

  return (
    <div className="Client">
      <Map
        setNoteActive={setNoteActive}
        setLatlng={setLatlng}
      />
      {
        noteActive ?
        <NoteForm
          setNoteActive={setNoteActive}
          latlng={latlng}
        />
        :
        <button className="font-gideon-roman absolute top-0 left-0 mt-1 ml-2 bg-white px-3 py-0.5 rounded hover:bg-gray-700  hover:text-white active:scale-95"
        >
          Create Series
        </button>
      }
    </div>
  );
}

export default Client
