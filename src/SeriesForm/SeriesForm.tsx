// import { useEffect, useState } from 'react';
// import { clientPropState } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SeriesForm(props: any) {
  return (
    <div className="SeriesForm bg-black/50 w-72 absolute top-0 z-10 flex flex-col items-center h-screen text-white">
      <FontAwesomeIcon
        className="hover:text-gray-700 absolute top-0 right-0 mt-1 mr-2 text-2xl"
        icon={faTimes}
        onClick={() => {props.setSeriesActive(false)}}
      />
      <h2 className="m-2 text-sm text-center">
        <span className='font-gideon-roman text-xl font-bold'>Create a new series</span>
      </h2>
      
      <form action="">

      </form>
    </div>
  );
}

export default SeriesForm;
