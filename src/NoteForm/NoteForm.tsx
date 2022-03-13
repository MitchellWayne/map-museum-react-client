import { useEffect, useState } from 'react';
// import { clientPropState } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function NoteForm(props: any) {
  const [latlng, setLatlng] = useState(['']); // For parsing props.latlng
  const [simpleForm, setSimpleForm] = useState(false);

  useEffect(() => {
    setLatlng(props.latlng.replace(/([()])+/g, '').split(','));
  }, [props.latlng])

  return (
    <div className="bg-black/50 NoteForm w-72 absolute top-0 z-10 flex flex-col items-center h-screen text-white">
      <FontAwesomeIcon
        className="hover:text-gray-700 absolute top-0 right-0 mt-1 mr-2 text-2xl"
        icon={faTimes}
        onClick={() => {props.setNoteActive(false)}}
      />
      <h2 className="m-2 text-sm text-center">
        <span className='font-gideon-roman text-xl font-bold'>Create a new note at:</span>
        <div className="text-left">Latitude: {latlng[0]}</div>
        <div className="text-left">Longitude: {latlng[1]}</div>
      </h2>
      <div className="formToggleWrapper justify-evenly font-gideon-roman flex flex-row w-full mt-2 text-xl">
        <button
          className={`grow ${simpleForm ? 'text-white bg-black hover:bg-gray-700' : 'text-black bg-white'}`}
          onClick={() => {setSimpleForm(false)}}
        >
          Detailed
        </button>
        <button
          className={`grow ${simpleForm ? 'text-black bg-white' : 'text-white bg-black hover:bg-gray-700'} `}
          onClick={() => {setSimpleForm(true)}}
        >
          Simple
        </button>
      </div>
      <form action="">

      </form>
    </div>
  );
}

export default NoteForm;
