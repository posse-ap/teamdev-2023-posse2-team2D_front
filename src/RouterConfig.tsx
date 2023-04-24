import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/pages/homePage/HomePage";
import { Sample1Page } from "./components/pages/sample1Page/Sample1Page";
import { Sample2Page } from "./components/pages/sample2Page/Sample2Page";
// import SamplePage3 from "./components/SamplePage3";
import { SamplePage3 } from "./components/SamplePage3";
import { SamplePage4, SamplePage4Child1, SamplePage4Child2, SamplePage4Child3 } from "./components/SamplePage4";
import { NotFound } from "./components/NotFound";

// ルートを定義したコンポーネント

export const RouterConfig =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="page1" element={<Sample1Page />} />
        <Route path="page2" element={<Sample2Page />} />
        <Route path="page3_hello" element={<SamplePage3 Message="Hello Router" />} />
        <Route path="page3_hi" element={<SamplePage3 Message="Hi Router"/>} />
        <Route path="page4" element={<SamplePage4 />} >
          <Route index />
          <Route path="child1" element={<SamplePage4Child1 />} /> 
          <Route path=":cildid" element={<SamplePage4Child2 />} /> 
          <Route path=":cildid" element={<SamplePage4Child3 />} /> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
