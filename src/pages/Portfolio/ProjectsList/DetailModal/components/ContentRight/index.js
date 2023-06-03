import styles from './ContentRight.module.scss';

function ContentRight({ data }) {
  return (
    <div className={styles.ContentRight}>
      <h3 className={styles.heading}>MYFOODIE</h3>
      <ul className={styles.content}>
        <li className={styles.desc}>
          <p>{data.desc}</p>
        </li>

        <li>
          {data.created && (
            <>
              <span>Created - </span>
              <span>{data.created}</span>
            </>
          )}
        </li>

        <li>
          {data.role && (
            <>
              <span>Role - </span>
              <span>{data.role}</span>
            </>
          )}
        </li>

        <li>
          {data.frontend && (
            <>
              <span>Frontend - </span>
              <span>{data.frontend.join(', ')}</span>
            </>
          )}
        </li>

        <li>
          {data.backend && (
            <>
              <span>Backend - </span>
              <span>{data.backend.join(', ')}</span>
            </>
          )}
        </li>

        <li>
          {data.tags && (
            <>
              <span>Tags - </span>
              <span>{data.tags.join(' / ')}</span>
            </>
          )}
        </li>

        <li>
          {data.demo && (
            <>
              <span>Demo - </span>
              <span>
                <a href={data.demo}>{data.demo}</a>
              </span>
            </>
          )}
        </li>

        <li>
          {data.source && (
            <>
              <span>Source - </span>
              <span>
                <a href={data.source}>{data.source}</a>
              </span>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ContentRight;
