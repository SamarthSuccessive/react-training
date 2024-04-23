// 2.Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of crashing the application. Implement this using the ErrorBoundary component.


import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
const Setting = React.lazy(() => import('./Setting'));
const About = React.lazy(() => import('./About'));


const Ques2 = () => {
  return (
    <>
      <div>Ques2</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Setting" element={<Suspense fallback={<div>Please wait while Loading...</div>}><Setting /></Suspense>} />
          <Route path="/About" element={<Suspense fallback={<div>Please wait while Loading...</div>}><About /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Ques2;
