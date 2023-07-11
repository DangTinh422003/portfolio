import { LazyLoadImage } from 'react-lazy-load-image-component';

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
