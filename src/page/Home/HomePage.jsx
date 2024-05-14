import "swiper/css/navigation";
import { HeaderMain, TopRated } from '../../components/index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const accordionData = [
  {
    accordion_text: "Kino kurish uchun qanday vaqt topsam buladi",
    accordion_answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
    consequuntur eaque officiis. Nam repellat, tempore facilis quasi
    commodi doloremque sit, incidunt cum quod nemo recusandae neque
    minima repudiandae modi! Distinctio consequuntur at commodi ex rem
    labore modi. Ipsum harum labore dolor deleniti, non ab ut commodi
    explicabo officiis! Quo, recusandae fugit exercitationem asperiores
    placeat optio voluptates quas perspiciatis magni dolorum eveniet
    alias vitae sit, nulla nisi illum cumque laudantium saepe! Quibusdam
    deserunt ipsam, deleniti officiis iste ullam aperiam. Quibusdam vero
    odio quas consectetur, voluptas beatae? Quod provident fugit modi
    inventore officiis, cupiditate eaque? Iste odio maxime porro
    similique delectus dolore?`,
  },
  {
    accordion_text: "Film tomosha qilish uchun qanday mashxur saytlar bor",
    accordion_answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
    consequuntur eaque officiis. Nam repellat, tempore facilis quasi
    commodi doloremque sit, incidunt cum quod nemo recusandae neque
    minima repudiandae modi! Distinctio consequuntur at commodi ex rem
    labore modi. Ipsum harum labore dolor deleniti, non ab ut commodi
    explicabo officiis! Quo, recusandae fugit exercitationem asperiores
    placeat optio voluptates quas perspiciatis magni dolorum eveniet
    alias vitae sit, nulla nisi illum cumque laudantium saepe! Quibusdam
    deserunt ipsam, deleniti officiis iste ullam aperiam. Quibusdam vero
    odio quas consectetur, voluptas beatae? Quod provident fugit modi
    inventore officiis, cupiditate eaque? Iste odio maxime porro
    similique delectus dolore?`,
  },
  {
    accordion_text: "Jahon filmlari haqida",
    accordion_answer: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
    consequuntur eaque officiis. Nam repellat, tempore facilis quasi
    commodi doloremque sit, incidunt cum quod nemo recusandae neque
    minima repudiandae modi! Distinctio consequuntur at commodi ex rem
    labore modi. Ipsum harum labore dolor deleniti, non ab ut commodi
    explicabo officiis! Quo, recusandae fugit exercitationem asperiores
    placeat optio voluptates quas perspiciatis magni dolorum eveniet
    alias vitae sit, nulla nisi illum cumque laudantium saepe! Quibusdam
    deserunt ipsam, deleniti officiis iste ullam aperiam. Quibusdam vero
    odio quas consectetur, voluptas beatae? Quod provident fugit modi
    inventore officiis, cupiditate eaque? Iste odio maxime porro
    similique delectus dolore?`,
  },
];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };


  return (
    <div className="main">

      <HeaderMain />
      <TopRated />

      <div className="accordion_container">
        {accordionData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(idx)}
            className="accordion_box"
          >
            <div className="accordion_title">
              <h1>{item?.accordion_text}</h1>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>

            {activeIndex === idx && (
              <div className="accordion_answer">
                <p>{item?.accordion_answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
