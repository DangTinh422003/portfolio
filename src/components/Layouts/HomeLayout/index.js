import Sidebar from '~/components/GlobalComponents/Sidebar';

function HomeLayout({ children }) {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
}

export default HomeLayout;
