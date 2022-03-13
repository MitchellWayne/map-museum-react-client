import { useEffect, useState } from 'react';
import { clientPropState } from '../interfaces';

function NoteForm(props: clientPropState) {
  const [latlng, setLatlng] = useState(['']);
  const [simpleForm, setSimpleForm] = useState(false);

  useEffect(() => {
    setLatlng(props.latlng.replace(/([()])+/g, '').split(','));
  }, [props.latlng])

  return (
    <div className="absolute top-0 z-10 flex flex-col items-center h-screen text-white bg-black/50 NoteForm w-72">
      <h2 className="text-sm text-center m-2">
        <span className='text-xl font-bold font-gideon-roman'>Create a new note at:</span>
        <div className="text-left">Latitude: {latlng[0]}</div>
        <div className="text-left">Longitude: {latlng[1]}</div>
      </h2>
      <div className="flex flex-row formToggleWrapper justify-evenly mt-2 w-full font-gideon-roman text-xl">
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
