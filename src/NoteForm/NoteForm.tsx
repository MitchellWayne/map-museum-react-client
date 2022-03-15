import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface seriesitem {
  description: string;
  image: string;
  mainImage: string;
  name: string;
  notes: Array<string>;
  _id: string;
}

function NoteForm(props: any) {
  const [latlng] = useState(props.latlng); // For parsing props.latlng
  const [simpleForm, setSimpleForm] = useState(false);
  const [serieslist, setSerieslist] = useState([]);

  useEffect(() => {
    const getSeriesList = async () => {
      try {
        let response = await fetch(`/series`, {
          method: "GET",
          credentials: "include",
        });
        const parsedResponse = await response.json();

        if (response.status === 200){
          console.log(parsedResponse);
          setSerieslist(parsedResponse);
        } else {
          console.log(parsedResponse);
        }

      } catch(err) {
        console.log('----- Serieslist Get ERROR -----');
        console.log(err);
      }
    }
    getSeriesList();
  }, [])

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
      <form action="" className="flex flex-col items-start justify-start w-full">
        <span className="mt-2.5 px-2.5 pb-2.5 flex justify-between w-full">
          <label className="font-gideon-roman" htmlFor="series">Assigned Series</label>
          <select className="w-36 font-gideon-roman text-black" name="series" id="series">
          {
            serieslist.map((item: seriesitem) => {
              return (
                <option
                  key={item._id}
                  value={item._id}
                  className="text-black"
                >
                { item.name }
                </option>
              )
            })
          }
          </select>
        </span>
        <span className="px-2.5 flex justify-between w-full">
          <label className="font-gideon-roman" htmlFor="name">Title</label>
          <input className="pl-2.5 w-56 text-black" type="text" name="name" id="name"/>
        </span>
      </form>
    </div>
  );
}

export default NoteForm;
