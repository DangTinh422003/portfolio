import Header from '~/components/GlobalComponents/Header';
import styles from './Contact.module.scss';
import clsx from 'clsx';

function Contact() {
  return (
    <div className={clsx(styles.Contact, 'routingAnimation')}>
      <Header
        mainHeading={{ main: 'get in', strong: 'touch' }}
        subHeading={'contact'}
      />

      <div className="content">
        <div className="container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus nam laborum ipsam illo beatae delectus officiis aperiam
          reprehenderit, vero, et animi doloremque odio labore provident
          eligendi earum dignissimos nostrum excepturi. Illum exercitationem
          sint, quidem nihil vero a eius nam aperiam dolores ducimus aut esse
          amet? Fuga modi sunt esse praesentium, in tempora quam libero
          voluptates provident officiis expedita laborum nobis! Tempore eius
          labore, iusto harum excepturi aperiam doloribus laborum nesciunt,
          eaque similique dolor, atque unde voluptas tempora eum dolore
          asperiores in suscipit non. Temporibus eligendi aliquid non mollitia
          perspiciatis rerum. Aperiam iusto voluptate molestias quod incidunt.
          Facilis, cumque? Obcaecati tempora, et perspiciatis sequi porro eos
          officia facere repudiandae necessitatibus. Doloremque molestias,
          incidunt quo provident non ad similique saepe corporis consequatur.
          Accusamus vitae alias non deleniti. Facilis totam hic voluptate vero
          quia provident, possimus accusamus sit ut inventore quasi corporis
          reprehenderit repellat ullam veritatis magnam explicabo minus harum
          odio asperiores architecto. Doloribus asperiores modi voluptates amet,
          fugit ipsa voluptate explicabo, distinctio ducimus mollitia quia
          deserunt in inventore perferendis, quisquam commodi voluptatibus
          corporis laborum qui impedit ullam! Nisi quod quaerat nobis sequi!
          Vero suscipit exercitationem facilis, distinctio minus ea corporis
          unde mollitia earum officiis impedit dolorum ullam deleniti! Quibusdam
          repudiandae iusto et sit, sunt dolores molestiae fugit voluptate.
          Voluptatem adipisci nisi nesciunt. Magni culpa veniam, molestias a
          quia, harum porro eius assumenda officia minus rem fugiat accusantium
          inventore facere distinctio libero commodi maiores mollitia provident,
          architecto aspernatur totam quibusdam. Odit, laboriosam accusamus.
          Doloremque cum sunt sint quae incidunt consectetur harum fuga mollitia
          voluptatum! Rerum quisquam eius animi. Maiores fugiat nobis nam
          commodi accusamus dignissimos cumque labore reprehenderit, repellat
          explicabo odio consequatur accusantium! Fuga tenetur illum id nulla
          culpa nobis ad sed ullam corrupti! Officia laborum alias adipisci,
          facere error suscipit? Minima asperiores beatae provident corrupti
          labore quae blanditiis excepturi debitis vel aliquid.
        </div>
      </div>
    </div>
  );
}

export default Contact;
