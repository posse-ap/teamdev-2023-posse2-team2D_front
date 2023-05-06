import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { RequestList } from "./pages/request/RequestList";
// import { RequestDetail } from "./pages/request/RequestDetail";
import { Bookmark } from "./pages/Bookmark";
import  Table  from "./components/Table";
import { Sample1Page }  from "./pages/sample1Page/Sample1Page";
import { Sample2Page } from "./pages/sample2Page/Sample2Page";
// import SamplePage3 from "./components/SamplePage3";
import { SamplePage3 } from "./components/SamplePage3";
import { SamplePage4, SamplePage4Child1, SamplePage4Child2, SamplePage4Child3 } from "./components/SamplePage4";
import { NotFound } from "./components/NotFound";
import ItemDetail from './pages/item/ItemDetail';
import KnowledgeDetail from './pages/knowledge/KnowledgeDetail';
import Layout from "./layout/Layout";
import ItemUpload from "./pages/item/ItemUpload";
import KnowledgeUpload from "./pages/knowledge/KnowledgeUpload";


export const App =() => {

const [bookmark, setBookmark] = useState({ is_bookmark: false });

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          {/* トップページ */}
          <Route index element={<HomePage />} />
          {/* ブックマークページ */}
          <Route path="bookmarkList" element={<Bookmark />} />
          {/* 商品/ナレッジ詳細ページ */}
          <Route path="item/:id" element={<ItemDetail setBookmark={setBookmark}/>} />
          <Route path="knowledge/:id" element={<KnowledgeDetail />} />
          {/* 商品/ナレッジ登録ページ */}
          <Route path="lendItem" element={<ItemUpload />} />
          <Route path="holdEvent" element={<KnowledgeUpload />} />
          {/* リクエスト関連 */}
          <Route path="requestList" element={<RequestList />} />
          {/* <Route path="requestDetail" element={<RequestDetail />} /> */}


          {/* サンプルページ */}
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
          
          {/* 404ページ */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
