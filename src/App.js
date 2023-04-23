import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/Routes';
import { DefaultLayout } from '~/components/Layouts';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Routes>
        <>
          {publicRoute.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </>
      </Routes>
    </div>
  );
}

export default App;
