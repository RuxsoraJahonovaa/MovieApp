import { randomArray } from "../../utils/randomArray";
import { SwiperSlide } from "swiper/react";
import { imageW300 } from "../../utils/imageUrl";
import InfoBy from "../InfoForSelf/InfoBy";
import { useEffect, useState } from "react";
import { Movie } from "../../services/serviceApi";
import PropTypes from "prop-types";

const Similary = ({ movieId }) => {
  const [datadSimilary, setSimilary] = useState(null);

  useEffect(() => {
    const handlegetSingle = async () => {
      const { response } = await new Movie().setSingleSimilar(movieId);
      setSimilary(response);
    };
    handlegetSingle();
  }, [movieId]);

  return (
    <InfoBy title={"Similar movies"}>
      {datadSimilary?.results?.sort(randomArray).map((item) => (
        <SwiperSlide key={item.id}>
          <div className="rated_box">
            <img src={imageW300(item?.poster_path)} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </InfoBy>
  );
};

Similary.Proptypes = {
  movieId: PropTypes.string,
};

export default Similary;
