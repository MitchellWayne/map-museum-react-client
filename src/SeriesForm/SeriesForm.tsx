// import { useEffect, useState } from 'react';
// import { clientPropState } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SeriesForm(props: any) {
  const createSeries = async () => {
    
  }
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
      
      <form 
        className="flex flex-col w-full font-sans font-semibold"
        action="">
        <label className="ml-2" htmlFor="name">Series Name</label>
        <input className="pl-2 text-black" type="text" name="name" id="name" />
        <label className="mt-2 ml-2" htmlFor="desc">Description</label>
        <textarea className="pl-2 text-black" name="desc" id="desc" rows={2} placeholder="Briefly describe the series"></textarea>
        <label className="mt-2 ml-2" htmlFor="iconImage">Series Icon Image</label>
        <input className="mt-2 ml-2" type="file" accept='image/png, image/jpeg' name="iconImage" id="iconImage" />
        <label className="mt-2 ml-2" htmlFor="mainImage">Series Main Image</label>
        <input className="mt-2 ml-2" type="file" accept='image/png, image/jpeg' name="mainImage" id="mainImage" />
        <button 
          className="self-center mt-5 px-5 text-xl font-bold text-white border border-white rounded-full active:scale-95 hover:border-white w-min whitespace-nowrap hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white"
          type="submit"
        >
          Create Series
        </button>
      </form>
    </div>
  );
}

export default SeriesForm;
