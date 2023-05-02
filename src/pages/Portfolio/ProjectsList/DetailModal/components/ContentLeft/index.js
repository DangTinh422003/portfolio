import styles from './ContentLeft.module.scss';
import Slider from 'react-slick';
import './Slider.scss';

function ContentLeft({ data }) {
  console.log('🚀 ~ file: index.js:3 ~ ContentLeft ~ data:', data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.ContentLeft}>
      <div className={styles.mainThumbnail}>
        <Slider {...settings}>
          {data?.images?.map((item, index) => (
            <div className={styles.item}>
              <img src={item} alt="" />
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.subThumbnail}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur cum accusamus ipsam
        maiores iusto delectus, quas nostrum vero reiciendis enim aliquam corporis? Aspernatur
        commodi aliquam, deleniti nobis cumque a?
      </div>
    </div>
  );
}

export default ContentLeft;
