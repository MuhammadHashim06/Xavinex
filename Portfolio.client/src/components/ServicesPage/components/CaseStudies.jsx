import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CaseStudies.css"; // Custom styles

const CaseStudies = () => {
    return (
      <div className="carousel-container">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={1.5} // Default: 1.5 slides visible
          spaceBetween={20}   // Space between slides
          breakpoints={{
            768: {
              slidesPerView: 2, // Show 2 slides for screens >= 768px
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3, // Show 3 slides for screens >= 1024px
              spaceBetween: 40,
            },
          }}
          loop={true}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <img src="/image1.png" alt="Slide 1" />
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <img src="/image2.png" alt="Slide 2" />
          </SwiperSlide>
          {/* Slide 3 */}
          <SwiperSlide>
            <img src="/image3.png" alt="Slide 3" />
          </SwiperSlide>
          {/* Slide 4 */}
          <SwiperSlide>
            <img src="/image4.png" alt="Slide 4" />
          </SwiperSlide>
        </Swiper>
  
        {/* Custom Navigation Buttons */}
        <div className="custom-navigation">
          <button className="custom-prev">‹</button>
          <button className="custom-next">›</button>
        </div>
      </div>
    );
  };

export default CaseStudies;