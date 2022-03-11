import { clientPropState } from '../interfaces';

function NoteForm(props: clientPropState) {
  console.log(' --- Rendered NoteForm ---');

  return (
    <div className="absolute z-10 h-screen p-2 text-white bg-black/50 NoteForm w-72">
      {props.latlng}
    </div>
  );
}

export default NoteForm;
