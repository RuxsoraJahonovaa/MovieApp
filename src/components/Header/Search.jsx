import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imageW300 } from "../../utils/imageUrl";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Circles } from "react-loader-spinner";
import { Movie } from "../../services/serviceApi";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hook/useDebounce";
import { Link } from "react-router-dom";
import "./search.css";



const Search = () => {
  const [search, setSearch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchingValue, setSearchingValue] = useState("");
  const { debounceValue } = useDebounce(searchingValue);



  useEffect(() => {
    const heandleSearch = async () => {
      if (debounceValue) {
        setIsLoading(true);
        const { response } = await new Movie().getSearchResult(debounceValue);

        if (response) {
          setSearch(response);
          setIsLoading(false);
        }
      }
    };
    heandleSearch();
  }, [debounceValue]);

  return (
    <div className="search">
      <div className="search_input">
        <input
          type="search"
          onChange={(e) => setSearchingValue(e.target.value)}
          placeholder=" Search movies..."
          
        />
        
      </div>

      {debounceValue && search !== null && (
        <ul className="search_status">
          {isLoading ? (
            <li className="search_loader">
              <Circles />
            </li>
          ) : (
            search?.results.length > 0 &&
            search?.results?.map((item) => (
              <li key={item.id}>
                <Link
                  to={`about/${item?.id}-${item?.title
                    .replaceAll(" ", "-")
                    .toLowerCase()}`}
                >
                  <img src={imageW300(item?.poster_path)} alt="" />
                  <h1>{item?.original_title}</h1>
                </Link>
              </li>
            ))
          )}

          {search?.results?.length === 0 && (
            <li className="search_error">
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                size="4x"
                color="orange"
              />
              Malumot topilmadi
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Search;
