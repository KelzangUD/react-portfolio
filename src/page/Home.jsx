import React from 'react';
const Header = React.lazy(() => import("../layer/Header"));
const Main = React.lazy(() => import("../layer/Main"));
const Footer = React.lazy(() => import("../layer/Footer"));

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default Home;
