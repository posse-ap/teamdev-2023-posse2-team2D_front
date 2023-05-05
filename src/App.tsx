import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login";
import { HomePage } from "./pages/homePage/HomePage";
import  Table  from "./components/Table";
import { Sample1Page }  from "./pages/sample1Page/Sample1Page";
import { Sample2Page } from "./pages/sample2Page/Sample2Page";
// import SamplePage3 from "./components/SamplePage3";
import { SamplePage3 } from "./components/SamplePage3";
import { SamplePage4, SamplePage4Child1, SamplePage4Child2, SamplePage4Child3 } from "./components/SamplePage4";
import Mypage from "./pages/mypage/Mypage";
import EditProfile from "./components/EditProfile";
import { NotFound } from "./components/NotFound";
import ItemDetail from './pages/item/ItemDetail';
import KnowledgeDetail from './pages/knowledge/KnowledgeDetail';
import Layout from "./layout/Layout";


export const App =() => {
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route index element={<LoginForm />} />
        <Route path="" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="item/:id" element={<ItemDetail />} />
          <Route path="knowledge/:id" element={<KnowledgeDetail />} />
          <Route path="table" element={<Table />} />
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
          <Route path="mypage" element={<Mypage />}/>
          <Route path="mypage/profile/edit" element={<EditProfile />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
