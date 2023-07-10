
import { Routes,Route } from "react-router-dom"

import { Home,About } from "./pages"
import { Navbar } from "./components"



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App









// import React from 'react';
// import ReviewForm from './forms/ReviewForm.jsx';

// export function App(props) {
//   return (
//     <div>
//       <ReviewForm />
//     </div>
//   );
// }