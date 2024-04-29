import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { imageW500 } from "../../utils/imageUrl";
import { ThreeCircles } from "react-loader-spinner";

import { usePopular } from "../../hook";
import { Movie } from "../../services/serviceApi";
import { useEffect } from "react";
import "./headerMain.css";
const HeaderMain = () => {
  const getTopMovies = async () => {
    const { response } = await new Movie().getTopRated();
    console.log(response);
  };

  useEffect(() => {
    getTopMovies();
  }, []);

  const { data, error, isLoading } = usePopular();

  console.log(data);

  return (
    <section className="section">
      <div className="main_container">
        {/* <div className="main_text">
          <div className="main_text-let">
            <h1>COME CLOSER MOVIE LOVERS</h1>

            <p>
              Dive into the world of movies with us, here you can get acquainted
              with new genre movies and more
            </p>
          </div>
        </div> */}
        <div className="main_slider-box">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            navigation
            className="mySwiper"
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {isLoading && (
              <SwiperSlide>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                  className="center"
                >
                  <ThreeCircles
                    visible={true}
                    height="100"
                    width="100"
                    color="#170c6a"
                    ariaLabel="three-circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              </SwiperSlide>
            )}

            {error && (
              <SwiperSlide>
                <h1>{error?.status_message}</h1>
              </SwiperSlide>
            )}

            {data?.results?.slice(0, 10).map((item) => {
              return (
                <SwiperSlide key={item?.id} className="slider_box">
                  <img
                    className="slide_image"
                    src={imageW500(item?.backdrop_path)}
                    alt=""
                  />
                  <div className="slide_content">
                    <div className="slide_item">
                      <h1>{item?.original_title}</h1>
                      <p>
                        {item?.overview.length > 50 &&
                          item?.overview?.slice(0, 50)}
                        ...{" "}
                      </p>
                    </div>

                    <div className="slide_footer">
                      <Link
                        to={`about/${item?.title
                          .replaceAll(" ", "-")
                          .toLowerCase()}-${item?.id} `}
                      >
                        <button className="btn_outline">Show more</button>
                      </Link>
                      <div className="release_date">
                        <FontAwesomeIcon icon={faCalendarAlt} />{" "}
                        {item?.release_date.replaceAll("-", "/")}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
