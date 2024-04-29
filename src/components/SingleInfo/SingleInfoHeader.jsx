import { useEffect, useState } from "react";
import { Movie } from "../../services/serviceApi";
import { imageW500 } from "../../utils/imageUrl";
import PropTypes from "prop-types";

const SingleInfoHeader = ({ movieId }) => {
  const [error, setError] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handlgetSingle = async () => {
      setLoading(true);
      const { response, error } = await new Movie().getSingle(movieId);
      if (response) {
        setLoading(false);
        setSingleData(response);
      }
      if (error) {
        setLoading(false);
        setError(error);
      }
      setSingleData(response);
      setError(error);
    };

    handlgetSingle();
  }, [movieId]);

  const year = new Date(singleData?.release_date);

  return (
    <div className="single_header">
      <div className="slide_content">
        <h1>
          {singleData?.original_title}{" "}
          <span className="text_opacity">({year.getFullYear()})</span>
        </h1>
        <ul>
          {singleData?.genres?.map((item) => (
            <li key={item?.id}>{item?.name}</li>
          ))}
        </ul>
      </div>
      <div
        className="single_image"
        style={{
          background: `linear-gradient(to left, transparent,#0c0c0c),url(${imageW500(
            singleData?.backdrop_path
          )})`,
        }}
      ></div>
    </div>
  );
};

SingleInfoHeader.propTypes = {
  movieId: PropTypes.string,
};

export default SingleInfoHeader;
