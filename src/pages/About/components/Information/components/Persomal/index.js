import LinkButton from '~/components/GlobalComponents/LinkButton';
import styles from './Personal.module.scss';

function Personal() {
  return (
    <div className={styles.Personal}>
      <div className={styles.Heading}>PERSONAL INFOS</div>
      <div className={styles.Content}>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <span>First Name:</span> Cao
              </li>
              <li>
                <span>Birthday:</span> 22 Years
              </li>
              <li>
                <span>National:</span> Vietnam
              </li>
              <li>
                <span>Phone:</span> 0862040xxx
              </li>
              <li>
                <span>Major:</span> computer science
              </li>
              <li>
                <span>Jobs:</span> Student
              </li>
            </ul>
          </div>

          <div className="col-6">
            <ul>
              <li>
                <span>Last Name:</span> Dang Tinh
              </li>
              <li>
                <span>Sex:</span> Male
              </li>
              <li>
                <span>Address:</span> Ho Chi Minh City
              </li>
              <li>
                <span>Facebook:</span> dang.tinh.xxx3
              </li>
              <li>
                <span>Email:</span> dangtinh@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <LinkButton
        icon={<i class="fa-solid fa-arrow-down"></i>}
        text="DOWNLOAD CV"
        path="#"
      />
    </div>
  );
}

export default Personal;
