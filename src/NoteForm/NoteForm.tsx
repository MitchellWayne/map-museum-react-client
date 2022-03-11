import { clientPropState } from '../interfaces';

function NoteForm(props: clientPropState) {
  return (
    <div className="absolute top-0 z-10 h-screen p-2 text-white bg-black/50 NoteForm w-72">
      {props.latlng}
    </div>
  );
}

export default NoteForm;
