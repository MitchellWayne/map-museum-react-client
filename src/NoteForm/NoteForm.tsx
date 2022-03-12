import { useEffect, useState } from 'react';
import { clientPropState } from '../interfaces';

function NoteForm(props: clientPropState) {
  const [latlng, setLatlng] = useState(['']);

  useEffect(() => {
    setLatlng(props.latlng.replace(/([()])+/g, '').split(','));
  }, [props.latlng])

  return (
    <div className="flex-col items-center absolute top-0 z-10 flex h-screen p-2 text-white bg-black/50 NoteForm w-72">
      <h2 className="text-center text-sm">
        <span className='font-bold text-xl'>Create a new note at:</span>
        <div className="text-left">Latitude: {latlng[0]}</div>
        <div className="text-left">Longitude: {latlng[1]}</div>
      </h2>
      <form action="">

      </form>
    </div>
  );
}

export default NoteForm;
