import { clientPropState } from '../interfaces';

function NoteForm(props: clientPropState) {

  return (
    <div className="flex-col items-center absolute top-0 z-10 flex h-screen p-2 text-white bg-black/50 NoteForm w-72">
      <h2 className="text-center text-sm">
        <span className='font-bold text-xl'>Create a new note at:</span>
        {props.latlng}
      </h2>
      <form action="">
        
      </form>
    </div>
  );
}

export default NoteForm;
