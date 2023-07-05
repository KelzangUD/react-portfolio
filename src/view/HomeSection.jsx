import React from 'react';
const HeroSection = React.lazy(() => import("../components/HeroSection"));

const HomeSection = () => {
  return (
    <>
     <HeroSection />   
    </>
  )
}

export default HomeSection;

