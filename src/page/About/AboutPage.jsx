import { useEffect, useState } from "react";
import { Movie } from "../../services/serviceApi";
import { imageW300 } from "../../utils/imageUrl";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Familiy",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const AboutPage = () => {
  const [genresId, setGenresId] = useState("");
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);
  const [selectedPage, setSelectedPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlePageClick = (data) => {
    setSelectedPage(data.select);
  };

  useEffect(() => {
    const handleSearch = async () => {
      setLoading(true);
      const { response } = await new Movie().getGenerelSearch(
        `&page=${selectedPage + 1}`,
        `primary_release_date.lte=${date}`,
        `&with_genres=${genresId}`
      );

      if (response) {
        setLoading(false);
        setData(response);
      }
    };
    handleSearch();
  }, [genresId, date, selectedPage]);

  return (
    <div className="about_container">
      AboutPage
      <div className="search_btns">
        <select name="" id="" onChange={(e) => setGenresId(e.target.value)}>
          {genres.map((item) => (
            <option key={item.id} value={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>

        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="search_data">
        {!loading ? (
          data?.results.map((item) => (
            <div className="search_item" key={item?.id}>
              <Link
                to={`/about/${item?.id}-${item?.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
              ></Link>

              <img
                src={imageW300(item?.poster_path)}
                className="search_item-image"
              />
            </div>
          ))
        ) : (
          <SkeletonTheme>
            <Skeleton
              count={8}
              width={200}
              height={350}
              containerClassName="skeleton"
            />
          </SkeletonTheme>
        )}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={10}
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={2}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default AboutPage;
