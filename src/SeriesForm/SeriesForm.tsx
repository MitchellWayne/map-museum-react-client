import { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SeriesForm(props: any) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState<Blob>();
  const [fixedIcon, setFixedIcon] = useState<string>();
  const [mainImg, setMainImg] = useState<Blob>();
  const [fixedMainImg, setFixedMainImg] = useState<string>();

  const createSeries = async () => {
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createSeries();
  };

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
        onSubmit={handleSubmit}>
        <label className="ml-2" htmlFor="name">Series Name</label>
        <input className="pl-2 text-black" type="text" name="name" id="name" onChange={e => setName(e.target.value)}/>
        <label className="mt-2 ml-2" htmlFor="desc">Description</label>
        <textarea className="pl-2 text-black" name="desc" id="desc" rows={2} placeholder="Briefly describe the series" onChange={e => setDesc(e.target.value)}></textarea>
        <label className="mt-2 ml-2" htmlFor="iconImage">Series Icon Image</label>
        <input className="mt-2 ml-2" type="file" accept='image/png, image/jpeg' name="iconImage" id="iconImage" onChange={e => {if (e.target.files && e.target.files.length > 0) {setIcon(e.target.files[0])}}} />
        <label className="mt-2 ml-2" htmlFor="mainImage">Series Main Image</label>
        <input className="mt-2 ml-2" type="file" accept='image/png, image/jpeg' name="mainImage" id="mainImage" onChange={e => {if (e.target.files && e.target.files.length > 0) setMainImg(e.target.files[0])}} />
        <button 
          className="self-center my-5 px-5 text-xl font-bold text-white border border-white rounded-full active:scale-95 hover:border-white w-min whitespace-nowrap hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white"
          type="submit"
        >
          Create Series
        </button>
      </form>

      <h3>Icon Preview</h3>
      <img className="aspect-square h-14" src={fixedIcon} alt="" />
      <h3>Main Image Preview</h3>
      <img className="aspect-[8/5] w-full" src={fixedMainImg} alt="" />
    </div>
  );
}

export default SeriesForm;
