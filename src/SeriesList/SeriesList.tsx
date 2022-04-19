import { useState, useEffect, useCallback } from "react";
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

function SeriesList(props: any){
  const [serieslist, setSerieslist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('Loading...');

  const [series, setSeries] = useState<seriesitem>();
  const [editSeries, setEditSeries] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState<Blob>();
  const [fixedIcon, setFixedIcon] = useState<string>();
  const [mainImg, setMainImg] = useState<Blob>();
  const [fixedMainImg, setFixedMainImg] = useState<string>();

  const handleSeriesDel = async (id: string, name: string) => {
    setLoading(true);
    try {
      let response = await fetch(`/series/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const parsedResponse = await response.json();

      if (response.status === 200){
        console.log(parsedResponse);
        window.alert('Successfully deleted series: ' + name);
        props.setSeriesListActive(false);
      } else {
        window.alert('The series must have all its associated notes deleted first');
        setLoading(false);
        console.log(parsedResponse);
      }

    } catch(err) {
      console.log('----- Series Delete ERROR -----');
      console.log(err);
    }
  }

  const handleSeriesUpdate = async () => {
    if (series) {
      let formdata = new FormData();
      formdata.set('name', name);
      formdata.set('description', desc);
      if (icon) formdata.set('imgfile', icon);
      if (mainImg) formdata.set('imgfile', mainImg);

      setLoading(true);
      try {
        let response = await fetch(`/series/${series._id}`, {
          method: "PUT",
          body: formdata,
          credentials: "include",
        });
        const parsedResponse = await response.json();

        if (response.status === 200){
          console.log(parsedResponse);
          window.alert('Successfully updated series: ' + series.name);
          props.setSeriesListActive(false);
        } else {
          setLoading(false);
          window.alert('Failed to update series: ' + series.name);
          console.log(parsedResponse);
        }

      } catch(err) {
        console.log('----- Series Delete ERROR -----');
        console.log(err);
      }
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSeriesUpdate();
  }

  useEffect(() => {
    const getSeriesList = async () => {
      try {
        let response = await fetch(`/series`, {
          method: "GET",
          credentials: "include",
        });
        const parsedResponse = await response.json();

        if (response.status === 200){
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
  }, []);

  const readImage = useCallback((isIcon: boolean, img: Blob) => {
    let fr = new FileReader();
    fr.readAsDataURL(img);
    fr.onload = (e) => {
      if (e.target && e.target.result) {
        if (isIcon) setFixedIcon(e.target.result as string);
        else if (!isIcon) setFixedMainImg(e.target.result as string);
      }
    }
  }, []);

  useEffect(() => {
    if (icon) readImage(true, icon);
  }, [icon, readImage]);

  useEffect(() => {
    if (mainImg) readImage(false, mainImg);
  }, [mainImg, readImage]);

  useEffect(() => {
    if (series) {
      setName(series.name);
      setDesc(series.description);
    }
  }, [series]);

  return(
    <div className="SeriesForm bg-black/50 w-72 absolute top-0 z-10 flex flex-col items-center h-screen overflow-auto text-white">
      <FontAwesomeIcon
        className="hover:text-gray-700 absolute top-0 right-0 mt-1 mr-2 text-2xl"
        icon={faTimes}
        onClick={() => {props.setSeriesListActive(false)}}
      />
      {
        editSeries ?
        <>
          <div className="SeriesForm bg-black/50 w-72 absolute top-0 z-10 flex flex-col items-center h-screen text-white overflow-auto">
            <FontAwesomeIcon
              className="hover:text-gray-700 absolute top-0 right-0 mt-1 mr-2 text-2xl"
              icon={faTimes}
              onClick={() => {props.setSeriesListActive(false)}}
            />
            <h2 className="m-2 text-sm text-center">
              <span className='font-gideon-roman text-xl font-bold'>Edit series</span>
            </h2>
            
            <form 
              className="flex flex-col w-full font-sans font-semibold"
              onSubmit={handleSubmit}>
              <label className="ml-2" htmlFor="name">Series Name</label>
              <input value={name} className="pl-2 text-black" type="text" name="name" id="name" onChange={e => setName(e.target.value)}/>
              <label className="mt-2 ml-2" htmlFor="desc">Description</label>
              <textarea value={desc} className="pl-2 text-black" name="desc" id="desc" rows={2} placeholder="Briefly describe the series" onChange={e => setDesc(e.target.value)}></textarea>
              <label className="mt-2 ml-2" htmlFor="iconImage">Series Icon Image</label>
              <input className="mt-2 ml-2" type="file" accept='image/png, image/jpeg' name="iconImage" id="iconImage" onChange={e => {if (e.target.files && e.target.files.length > 0) {setIcon(e.target.files[0])}}} />
              <label className="mt-2 ml-2" htmlFor="mainImage">Series Main Image</label>
              <input className="mt-2 ml-2" type="file" accept='image/png, image/jpeg' name="mainImage" id="mainImage" onChange={e => {if (e.target.files && e.target.files.length > 0) setMainImg(e.target.files[0])}} />
              {
                !loading ?
                <button 
                  className="self-center my-5 px-5 text-xl font-bold text-white border border-white rounded-full active:scale-95 hover:border-white w-min whitespace-nowrap hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white"
                  type="submit"
                >
                  Update Series
                </button>
                :
                <h2 className="font-gideon-roman text-xl font-bold text-center items-center w-full text-green-500">
                  {loadingMsg}
                </h2>
              }
            </form>

            {
              fixedIcon ?
              <>
                <h3>Icon Preview</h3>
                <img className="aspect-square h-14 object-cover" src={fixedIcon} alt="" />
              </>
              :
              null
            }
            {
              fixedMainImg ?
              <>
                <h3>Main Image Preview</h3>
                <img className="aspect-[8/5] w-full object-cover" src={fixedMainImg} alt="" />
              </>
              :
              null
            }
          </div>
        </>
        :
        <>
        {
          !loading ?
          <>
            <h2 className="m-2 text-sm text-center">
              <span className='font-gideon-roman text-xl font-bold'>Series List</span>
            </h2>
            <ul className="flex flex-col w-full">
            {
              serieslist.map((series: seriesitem) => {
                return (
                  <li key={series._id} value={series._id}
                    className="bg-black/50 w-full p-1 my-0.5 h-14 flex flex-row justify-between"
                  >
                    <span className="flex w-11/12">
                      <img
                        src={series.image ? `/series/${series._id}/image/${series.image}` : ''}
                        alt=""
                        className="aspect-square bg-black/50 h-full object-cover"
                      />
                      <span className="w-9/12 ml-2">
                        <h2 className="h-1/2 truncate">{series.name}</h2>
                        <h4 className="h-1/2">{series.notes.length} notes</h4>
                      </span>
                    </span>
                    <div className="flex flex-col">
                      <FontAwesomeIcon
                        className="hover:text-red-600 active:scale-90 text-2xl mr-1 justify-self-end"
                        icon={faTimes}
                        onClick={() => {handleSeriesDel(series._id, series.name)}}
                      />
                      <button className="mr-1" onClick={() => {setEditSeries(true); setSeries(series)}}>Edit</button>
                    </div>
                  </li>
                )
              })
            }
            </ul>
          </>
          :
          <h4 className="m-2 text-sm text-center">
            <span className='font-gideon-roman text-xl font-bold'>Deleting series...</span>
          </h4>
        }
        </>
      }
    </div>
  );
}

export default SeriesList;