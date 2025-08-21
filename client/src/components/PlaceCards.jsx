import axios from "axios";
import { useState, useEffect } from "react";
const PlaceCards = ({search}) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getPlaces();
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const getPlaces = async () => {
    try {
    const result = await axios.get(`http://localhost:4001/trips?keywords=${search}`);
    console.log(result.data.data);
    setPlaces(result.data.data);
  } catch (error) {
    console.log(error);
    setPlaces([]);
  }
  };
  return (
    <div className="flex flex-col justify-start m-5 p-5">
      {places.map((place) => (
        <div
          key={place.eid}
          className="flex justify-start w-full h-70 m-2 p-2 border-gray-300 rounded-lg"
        >
          <img
            src={place.photos[0]}
            alt={place.title}
            className=" rounded-3xl m-1"
          />
          <div className="flex flex-col justify-start ml-5 p-2 w-1/2 h-1/2">
            <h1 className="text-xl font-normal justify-start text-left">
              {place.title}
            </h1>
            <p className="text-sm font-normal justify-start text-left">
              {place.description.length > 100
                ? place.description.slice(0, 100) + " "
                : place.description}
            </p>
            <a href={place.url} target="_blank" className="text-sm  text-sky-500 font-normal justify-start text-left">อ่านต่อ</a>
            <div className="flex flex-row flex-wrap gap-2">
              <p className="text-sm font-normal">หมวด :</p>
              {place.tags.map((tag) => (
                <a
                  href={place.url}
                  target="_blank"
                  key={tag}
                  className="flex justify-center text-sm font-normal px-1 py-1"
                >
                  {tag}
                </a>
              ))}
            </div>
            <div className="flex flex-row justify-start h-full">
              {place.photos.length > 0 &&
                place.photos
                  .slice(1)
                  .map((photo, index) => (
                    <img
                      src={photo}
                      alt={place.title}
                      className="m-3 rounded-xl"
                    />
                  ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaceCards;
