import Sidebar from '~/components/GlobalComponents/Sidebar';

function DefaultLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}

export default DefaultLayout;
