import { projects } from '~/static/data';
import styles from './Projects.module.scss';

function Projects() {
  return (
    <div className={styles.Projects}>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-4">
            <div className={styles.item} data-select={index}>
              <div className={styles.imageWrap}>
                <img src={project.images[0]} alt={project.name} />
              </div>
              <div className={styles.projectName}>
                <h3>{project.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
