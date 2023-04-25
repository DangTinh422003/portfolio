import { useEffect, useRef } from 'react';
import styles from './ControlGroup.module.scss';
import { useState } from 'react';

function ControlGroup() {
  const ControlGroup = useRef();
  const [indexActiveButton, setIndexActiveButton] = useState(3);

  useEffect(() => {
    ControlGroup.current
      ?.querySelectorAll('button')
      .forEach((button, index) => {
        if (index === indexActiveButton) {
          button.classList.add(styles.Active);
        } else {
          button.classList.remove(styles.Active);
        }
      });
  });

  const handleActiveButton = (e) => {
    setIndexActiveButton(+e.target.dataset.indexactive);
  };

  return (
    <div className={styles.ControlGroup} ref={ControlGroup}>
      <button onClick={handleActiveButton} data-indexactive={0}>
        CSS/JAVASCRIPT
      </button>
      <button onClick={handleActiveButton} data-indexactive={1}>
        SCSS/REACT
      </button>
      <button onClick={handleActiveButton} data-indexactive={2}>
        RESTFUL API
      </button>
      <button onClick={handleActiveButton} data-indexactive={3}>
        ALL
      </button>
    </div>
  );
}

export default ControlGroup;
