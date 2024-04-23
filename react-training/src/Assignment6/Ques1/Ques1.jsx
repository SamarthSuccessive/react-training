// import React, { Suspense } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from "./Home";

// const Setting = React.lazy(() => import('./Setting'));
// const About = React.lazy(() => import('./About'));

// const Ques1 = () => {
//   return (
//     <>
//       <div>Ques6</div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Suspense fallback={<div>Please wait while Loading...</div>}> */}
//             <Route path="/Setting" element={<Setting />} />
//             <Route path="/About" element={<About />} />
//           {/* </Suspense> */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default Ques1;
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";

const Setting = React.lazy(() => import('./Setting'));
const About = React.lazy(() => import('./About'));

const Ques1 = () => {
  return (
    <>
      <div>Ques1</div>
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

export default Ques1;
