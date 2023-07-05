import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Animation({ children }) {
  // animation library
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return <>{children}</>;
}

export default Animation;
