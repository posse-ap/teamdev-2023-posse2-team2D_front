import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Item.module.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, Box, Button, Typography } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RestoreIcon from '@mui/icons-material/Restore';
import logo from '../../logo.jpg';
import { GridColDef, DataGrid } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: 'id', headerName: '取引ID', width: 70, align: 'right'},
  { field: 'start_date', headerName: 'レンタル開始日', width: 140 },
  { field: 'points', headerName: 'ポイント数', width: 100, align: 'right' },
  { field: 'lender', headerName: '貸出人', width: 130 },
  { field: 'borrower', headerName: '借用人', width: 130 },
  { field: 'return_date', headerName: '返却日', width: 130 },
];

type Item = {
  id: number;
  price: number;
  img: string[];
  title: string;
  authorInfo: { id: number; name: string;};
  comments?: { user_id: number; user_name: string; img: string; content: string;}[];
  transactions?: { id: number; start_date: string; points: number; lender: string; borrower: string; return_date: string;}[];
};

const item: Item = 
  {
    id: 1,
    price: 1000,
    img: [
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    ],
    title: "MacbookPro 2018 core i7 2.6GHz 16GB 512GB",
    authorInfo: { id: 1, name: "かしけん" },
    comments: [
      {user_id: 1, user_name: "tarp", img: logo, content: "これってスペックいいほうなんですかね？"},
      {user_id: 2, user_name: "kashiken", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", content: "これってスペックいいほうなんですかね？"},
      {user_id: 3, user_name: "tsuyoshi", img: logo, content: "これってスペックいいほうなんですかね？"},
      {user_id: 3, user_name: "tsuyoshi", img: logo, content: "もっと値下げしてください"},
      {user_id: 1, user_name: "tarp", img: logo, content: "これってスペックいいほうなんですかね？"},
    ],
    transactions: [
      {id: 1, start_date:"2022/02/11", points: 1000, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 2, start_date:"2022/02/11", points: 1000, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 3, start_date:"2022/02/11", points: 1000, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 4, start_date:"2022/02/11", points: 1000, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 5, start_date:"2022/02/11", points: 100, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 1, start_date:"2022/02/11", points: 1000, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 2, start_date:"2022/02/11", points: 500, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 3, start_date:"2022/02/11", points: 1000, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 4, start_date:"2022/02/11", points: 2000, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
      {id: 5, start_date:"2022/02/11", points: 3000, lender: "かんた", borrower: "kashiken", return_date: "2022/04/14" },
    ]
  };

const ItemDetail = () => {

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  }

  const commentsClickScroll = () => {
    const comments = document.getElementById('comments');
    if (comments) {
      comments.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const transactionsClickScroll = () => {
    const transactions = document.getElementById('transactions');
    if (transactions) {
      transactions.scrollIntoView({ behavior: 'smooth' });
    }
  }


  return (
    <div className={styles.root}>
      <Typography color="blue" display="flex" alignItems="center" sx={{fontSize: 16, mb: 2}} onClick={handleBack}>
        <ArrowBackIosIcon sx={{width: 16}} />
        戻る
      </Typography>
      <Box className="product-detail" sx={{display: "flex"}}>
        <Box className="left" sx={{display: "flex", width: "50%"}}>
          <Box className="small_pictures" sx={{ mr: "20px" }}>
          {item.img.map((img_child) => (
            <Box sx={{mb: 1}}>
              <img src={img_child} alt="Product Image" style={{objectFit:'cover'}} height="77" width="77" />
            </Box>
          ))}
          </Box>
          <Box className="big_picture_container">
            <img src={item.img[0]} height="520" width="520" style={{objectFit:'cover'}} alt="Big Product Image" className="big_picture" />
          </Box>
        </Box>
        <Box className="right" sx={{ml: "70px", width: "40%"}} >
          <h1 style={{ margin: 0, fontSize: "28px", color: "#666666" }}>{item.title}</h1>
          <Typography sx={{ my: 3, fontSize: "20px" }}>{item.price}pt</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: 1}}>
              <BookmarkBorderIcon sx={{width: 30, height: 30, "@media screen and (max-width:498px)": {width: 25, height: 25} }} />
              <Typography sx={{ fontSize: 10, "@media screen and (max-width:498px)": {fontSize: 12}, color: '#666666' }} >
                ブックマーク
              </Typography>
            </Box>
            <Box onClick={commentsClickScroll} sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: 1}}>
              <ChatBubbleOutlineIcon sx={{width: 30, height: 30, "@media screen and (max-width:498px)": {width: 25, height: 25} }} />
              <Typography sx={{ fontSize: 10, "@media screen and (max-width:498px)": {fontSize: 12}, color: '#666666' }} >
                コメント
              </Typography>
            </Box>
            <Box onClick={transactionsClickScroll} sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: 1}}>
              <RestoreIcon sx={{width: 30, height: 30, "@media screen and (max-width:498px)": {width: 25, height: 25} }} />
              <Typography sx={{ fontSize: 10, "@media screen and (max-width:498px)": {fontSize: 12}, color: '#666666' }} >
                取引履歴
              </Typography>
            </Box>
          </Box>
          <Button sx={{ my: 3, py: 1, width: "100%", fontWeight: "bold" }} variant="contained">レンタル</Button>
          <Typography sx={{ mt: 1, fontSize: "20px", fontWeight: "bold", color: "#666666" }}>商品の説明</Typography>
          <Typography sx={{ fontSize: "16px", color: "#666666" }}>ちょっとdocker使えないかも、自分でインストールしといてください。値切りは受け付けません。</Typography>
          <Typography sx={{ mt: 3, fontSize: "20px", fontWeight: "bold", color: "#666666" }}>オーナー</Typography>
          <Link to={'../user/' + item.authorInfo.id}>
            <Typography sx={{ fontSize: 18, "@media screen and (max-width:498px)": {fontSize: 14} }} >
              {item.authorInfo.name}
            </Typography>
          </Link>
          <Box id="comments">
            <Typography sx={{ mt: 3, mb: 1, fontSize: "20px", fontWeight: "bold", color: "#666666" }}>コメント({item.comments?.length ?? 0})</Typography>
            {(item.comments ?? []).map((comment: { user_id: number; user_name: string; img: string; content: string; })  => (
              <Box sx={{ display: 'flex', flexDirection: "column"}}>
                <Link to={'../user/' + comment.user_id} style={{ textDecoration: 'none' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                    <Avatar src={comment.img}  sx={{ width: 40, height: 40 ,"@media screen and (max-width:498px)": {width: 25, height: 25} }} alt="PeerPerk" />
                    <Typography sx={{ fontSize: 20, "@media screen and (max-width:498px)": {fontSize: 14}, color: '#666666' }} >
                    {comment.user_name}
                    </Typography>
                  </Box>
                </Link> 
                <Typography sx={{ mx: "auto", mt: 1, mb: 2, p: 2, width: "80%", borderRadius: 1 , fontSize: 16, backgroundColor: "#ddd", color: 'black' }} >
                {comment.content}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box id="transactions" style={{ margin: "0 auto", display: "flex", flexDirection: "column", height: 400, width: '70%' }}>
        <Typography sx={{ mt: 3, mb: 2, fontSize: "20px", fontWeight: "bold", color: "#666666" }}>取引履歴({item.transactions?.length ?? 0})</Typography>
        <DataGrid
        sx={{ px: 3, textAlign: 'center'}}
        rows={item.transactions ?? []}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 50}}
        />
    </Box>
    </div>
  );
};

export default ItemDetail;
