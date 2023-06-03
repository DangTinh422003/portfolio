import styles from './Slider.module.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Slider({ images }) {
  return (
    <div className={styles.Slider}>
      <Swiper
        className={styles.mainSlider}
        spaceBetween={15}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index} virtualIndex={index} className={styles.sliderItem}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
