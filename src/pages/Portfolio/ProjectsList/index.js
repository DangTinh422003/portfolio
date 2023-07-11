import { projects } from '~/static/data';
import styles from './ProjectsList.module.scss';
import DetailModal from './DetailModal';
import { useState } from 'react';
import Img from '~/components/GlobalComponents/Img';

function ProjectsList() {
  const [idActiveModal, setIdActiveModal] = useState();
  const [activeModal, setActiveModal] = useState(false);
  const handleActiveModal = () => setActiveModal(!activeModal);

  return (
    <div className={styles.ProjectsList}>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={project.id}>
            <div
              onClick={(e) => {
                setActiveModal(true);
                setIdActiveModal(index);
              }}
              className={styles.item}
              data-select={index}
              data-aos="fade-right"
              data-aos-delay={index * 300}
              data-aos-duration="500"
            >
              <div className={styles.imageWrap}>
                <Img src={project.images[0]} alt={project.name} />
              </div>
              <div className={styles.projectName}>
                <h3>{project.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeModal && (
        <DetailModal data={projects[idActiveModal]} onActiveModal={handleActiveModal} />
      )}
    </div>
  );
}

export default ProjectsList;
