import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

function Img({ alt, height, src, width, className = '' }) {
  console.log(className);
  return (
    <LazyLoadImage
      wrapperClassName={className}
      effect="blur"
      alt={alt}
      height={height}
      src={src}
      width={width}
    />
  );
}

export default Img;
