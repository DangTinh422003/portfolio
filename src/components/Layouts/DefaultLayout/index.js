import Header from '~/components/GlobalComponents/Header';
import Sidebar from '~/components/GlobalComponents/Sidebar';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
}

export default DefaultLayout;
