import React, { useState } from 'react';
import Map from '../Map';
import NoteForm from '../NoteForm';
import SeriesForm from '../SeriesForm';
import SeriesList from '../SeriesList';


function Client() {
  const [seriesActive, setSeriesActive] = useState(false);
  const [seriesListActive, setSeriesListActive] = useState(false);
  const [noteActive, setNoteActive] = useState(false);
  const [latlng, setLatlng] = useState('');

  return (
    <div className="Client">
      <Map
        setNoteActive={setNoteActive}
        setSeriesActive={setSeriesActive}
        setLatlng={setLatlng}
      />
      {
        noteActive ?
        <NoteForm
          setNoteActive={setNoteActive}
          latlng={latlng}
        />
        :
        <React.Fragment>
        <div className="absolute top-0 left-0 flex ">
          {
            !seriesListActive  ?
            <React.Fragment>
              {
                seriesActive?
                <SeriesForm
                  setSeriesActive={setSeriesActive}
                />
                :
                <button
                  className="font-gideon-roman mt-2 ml-2 bg-white px-3 py-0.5 rounded hover:bg-gray-700  hover:text-white active:scale-95"
                  onClick={() => {setSeriesActive(true)}}
                >
                  Create Series
                </button>
              }
            </React.Fragment>
            :
            null
          }
          {
            !seriesActive ?
            <React.Fragment>
              {
                seriesListActive?
                <SeriesList
                />
                :
                <button
                  className="font-gideon-roman mt-2 ml-2 bg-white px-3 py-0.5 rounded hover:bg-gray-700  hover:text-white active:scale-95"
                  onClick={() => {setSeriesListActive(true)}}
                >
                  Series List
                </button>
              }
            </React.Fragment>
            :
            null
          }
        </div>
        </React.Fragment>
      }
    </div>
  );
}

export default Client
