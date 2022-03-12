import { useEffect, useState } from 'react';
import { clientPropState } from '../interfaces';

function NoteForm(props: clientPropState) {
  const [latlng, setLatlng] = useState(['']);
  const [simpleForm, setSimpleForm] = useState(false);

  useEffect(() => {
    setLatlng(props.latlng.replace(/([()])+/g, '').split(','));
  }, [props.latlng])

  return (
    <div className="absolute top-0 z-10 flex flex-col items-center h-screen p-2 text-white bg-black/50 NoteForm w-72">
      <h2 className="text-sm text-center">
        <span className='text-xl font-bold'>Create a new note at:</span>
        <div className="text-left">Latitude: {latlng[0]}</div>
        <div className="text-left">Longitude: {latlng[1]}</div>
      </h2>
      <div className="flex flex-row formToggleWrapper">
        <button className="px-10 mt-5 text-black bg-white">Detailed</button>
        <button className="px-10 mt-5 text-black bg-white">Simple</button>
      </div>
      <form action="">

      </form>
    </div>
  );
}

export default NoteForm;
