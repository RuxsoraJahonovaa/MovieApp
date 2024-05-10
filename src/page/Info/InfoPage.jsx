import { useParams } from "react-router";
import SingleInfoHeader from "../../components/SingleInfo/SingleInfoHeader";
import { Similary } from "../../components/index";
import { extractNumbers } from "../../utils/getNumberSlice";
// import { useSelector } from "react-redux";

const InfoPage = () => {
  const { id } = useParams();
  const movieId = extractNumbers(id);
  // const { value } = useSelector(({ count }) => count);
  console.log(movieId);

  return (
    <div className="single_container">
      {/* <h1 style={{ color: "#fff" }}>{value}</h1> */}

      <SingleInfoHeader movieId={movieId} />
      <Similary movieId={movieId} />
    </div>
  );
};

export default InfoPage;
