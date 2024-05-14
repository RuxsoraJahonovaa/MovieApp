import { SwiperSlide } from "swiper/react";
import { randomArray } from "../../utils/randomArray";
import InfoBy from "../InfoForSelf/InfoBy";
import { imageW300 } from "../../utils/imageUrl";
import { Movie } from "../../services/serviceApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./topRated.css"
const TopRated = () => {
  const [toprated, setTopRated] = useState(null);

  useEffect(() => {
    const getToprated = async () => {
      const { response } = await new Movie().getTopRated();
      setTopRated(response);
    };
    getToprated();
  }, []);

  return (
    <InfoBy title={"Top rated movies"}>
      {toprated?.results?.sort(randomArray).map((item) => (
        <SwiperSlide key={item.id}>
            <Link to={`about/${item?.id}-${item?.title.replaceAll(" ","-").toLowerCase()}`}>
            
            

          <div className="rated_box">
            <img src={imageW300(item?.poster_path)} alt="" />
          </div>
          </Link>
        </SwiperSlide>
      ))}
    </InfoBy>
  );
};

export default TopRated;
