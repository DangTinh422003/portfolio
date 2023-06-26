import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Animation({ children }) {
  // animation library
  useEffect(() => {
    AOS.init({
      disable: 'phone',
    });
  }, []);

  return <>{children}</>;
}

export default Animation;
