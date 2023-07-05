import React from "react";
const Home = React.lazy(() => import('./page/Home'));

function App() {
  return (
    <div className='w-full h-full'>
      <Home />
    </div>
  );
}

export default App;
