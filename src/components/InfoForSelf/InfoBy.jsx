import { Swiper } from "swiper/react"
import { Autoplay } from "swiper"

import PropTypes from 'prop-types'



const InfoBy = ( {title,children}) => {
  return (
    <section className="top_rated">
        <div className="rated_container">
          <h1 className="banner_top">{title}</h1>

          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            modules={[Autoplay]}
            className="mySwiper"
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            
            {children}
          </Swiper>
        </div>
      </section>
  )
}


InfoBy.Proptypes={
    title:PropTypes.string,
    children:PropTypes.array
}
export default InfoBy