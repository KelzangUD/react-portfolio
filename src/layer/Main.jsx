import React from 'react';
const HomeSection = React.lazy(() => import('../view/HomeSection'));

const Main = () => {
  return (
    <>
     <HomeSection />
    </>
  )
}

export default Main
