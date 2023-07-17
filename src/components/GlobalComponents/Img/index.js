import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './Img.module.scss';

function Img({ alt, height, src, width, className = '', transparent = false }) {
  return (
    <LazyLoadImage
      wrapperClassName={`${className} ${!transparent ? styles.wrapperImg : ''}`}
      effect="blur"
      alt={alt}
      height={height}
      src={src}
      width={width}
    />
  );
}

export default Img;
