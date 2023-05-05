import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Item.module.scss";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Avatar, Box, Button, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RestoreIcon from '@mui/icons-material/Restore';
import logo from '../../logo.jpg';
import { GridColDef, DataGrid } from "@mui/x-data-grid";
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { useSnackbar } from "../../components/snackbar/Snackbar";
import SimpleTabs from "../../components/SimpleTabs";


const columns: GridColDef[] = [
  { field: 'id', headerName: '取引ID', width: 70, align: 'right'},
  { field: 'start_date', headerName: 'レンタル開始日', width: 140 },
  { field: 'points', headerName: 'ポイント数', width: 100, align: 'right' },
  { field: 'borrower', headerName: '借用人', width: 130 },
  { field: 'return_date', headerName: '返却日', width: 130 },
];

type Item = {
  id: number;
  price: number;
  title: string;
  state: number;
  img: string[];
  ownerInfo: { id: number; name: string; img: string;};
  comments?: { user_id: number; user_name: string; img: string; content: string;}[];
  transactions?: { id: number; start_date: string; points: number; borrower: string; return_date: string;}[];
};

const item: Item = 
  {
    id: 1,
    price: 1000,
    title: "MacbookPro 2018 core i7 2.6GHz 16GB 512GB",
    state: 1,
    ownerInfo: { id: 1, name: "かしけん", img: logo},
    img: [
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    ],
    comments: [
      {user_id: 1, user_name: "tarp", img: logo, content: "これってスペックいいほうなんですかね？"},
      {user_id: 2, user_name: "kashiken", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", content: "これってスペックいいほうなんですかね？"},
      {user_id: 3, user_name: "tsuyoshi", img: logo, content: "これってスペックいいほうなんですかね？"},
      {user_id: 3, user_name: "tsuyoshi", img: logo, content: "もっと値下げしてください"},
      {user_id: 1, user_name: "tarp", img: logo, content: "これってスペックいいほうなんですかね？"},
    ],
    transactions: [
      {id: 1, start_date:"2022/02/11", points: 1000, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 2, start_date:"2022/02/11", points: 1000, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 3, start_date:"2022/02/11", points: 1000, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 4, start_date:"2022/02/11", points: 1000, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 5, start_date:"2022/02/11", points: 100, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 1, start_date:"2022/02/11", points: 1000, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 2, start_date:"2022/02/11", points: 500, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 3, start_date:"2022/02/11", points: 1000, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 4, start_date:"2022/02/11", points: 2000, borrower: "kashiken", return_date: "2022/04/14" },
      {id: 5, start_date:"2022/02/11", points: 3000, borrower: "kashiken", return_date: "2022/04/14" },
    ]
  };

const ItemDetail = () => {

  const { showSnackbar } = useSnackbar();
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

  // 1. 入力値の定義を作成
  type Inputs = {
    comment: string
  }
  // 2. useFormで必要な関数を取得し、デフォルト値を指定
  const {
    control,
    handleSubmit,
  } = useForm<Inputs>({
  })
 // 3. 検証ルールを指定
  const validationRules = {
    comment: {
      required: 'コメントを入力してください。',
      maxLength: { value: 200, message: '200文字以下で入力してください。' }
    }
  }
 // 4. サブミット時の処理を作成
 // 検証が成功すると呼び出され、引数で入力値が渡ってくる
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(`submit: ${data.comment}`)
  }

  const [index, setIndex] = useState(0);
  const previousImage = () => {
    if (index === 0) {
      setIndex(item.img.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextImage = () => {
    if (index === item.img.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className={styles.root}>
      <Typography color="blue" display="flex" alignItems="center" sx={{fontSize: 16, mb: 2}} onClick={handleBack}>
        <ArrowBackIosIcon sx={{width: 16}} />
        戻る
      </Typography>
      <Box sx={{display: "flex"}}>
        <Box sx={{display: "flex", width: "50%"}}>
          <Box sx={{ mr: "20px" }}>
          {item.img.map((img_child) => (
            <Box sx={{mb: 1}}>
              <img src={img_child} alt="Product Image" style={{objectFit:'contain', backgroundColor: "#F5F5F5"}} height="77" width="77" />
            </Box>
          ))}
          </Box>
          <Box className={styles.big_picture}>
            {item.state === 1 && (
              <Typography sx={{fontsize: "18px"}} component="div" className={styles.before_lending}>
                貸出開始前
              </Typography> 
            )}
            {item.state === 3 && (
              <Typography sx={{fontsize: "18px"}} component="div" className={styles.on_loan}>
                貸出中
              </Typography> 
            )}
            <ArrowBackIosNewIcon className={styles.arrow_back} onClick={previousImage} />
            <img src={item.img[index]} height="100%" width="100%" style={{objectFit:'contain', backgroundColor: "#F5F5F5"}} alt={`Image ${index}`}/>
            <ArrowForwardIosIcon className={styles.arrow_forward} onClick={nextImage}/>
            <Typography sx={{fontsize: "14px"}} component="div" className={styles.img_index}>
              {index + 1} / {item.img.length}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ml: "70px", width: "40%"}} >
          <h1 style={{ margin: 0, fontSize: "28px", color: "#666666" }}>{item.title}</h1>
          <Typography sx={{ my: 2, fontSize: "20px" }}>{item.price}pt</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: 1}}>
              <BookmarkBorderIcon onClick={() => showSnackbar('ブックマークに追加しました！', 'success')} sx={{width: 30, height: 30, "@media screen and (max-width:498px)": {width: 25, height: 25} }} />
              {/* <BookmarkBorderIcon onClick={() => showSnackbar('ブックマークから削除しました', 'warning')} sx={{width: 30, height: 30, "@media screen and (max-width:498px)": {width: 25, height: 25} }} /> */}
              <Typography sx={{ fontSize: 10, "@media screen and (max-width:498px)": {fontSize: 12}, color: '#666666' }} >
                ブックマーク
              </Typography>
            </Box>
            <Box onClick={() => {commentsClickScroll(); transactionsClickScroll();}} sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: 1}}>
              <ChatBubbleOutlineIcon sx={{width: 30, height: 30, "@media screen and (max-width:498px)": {width: 25, height: 25} }} />
              <Typography sx={{ fontSize: 10, "@media screen and (max-width:498px)": {fontSize: 12}, color: '#666666' }} >
                コメント
              </Typography>
            </Box>
            <Box onClick={() => {commentsClickScroll(); transactionsClickScroll();}} sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: 1}}>
              <RestoreIcon sx={{width: 30, height: 30, "@media screen and (max-width:498px)": {width: 25, height: 25} }} />
              <Typography sx={{ fontSize: 10, "@media screen and (max-width:498px)": {fontSize: 12}, color: '#666666' }} >
                取引履歴
              </Typography>
            </Box>
          </Box>
          {item.state === 1 || item.state === 3  ? (
            <Button sx={{ my: 3, py: 1, width: "100%", fontWeight: "bold" }} disabled variant="outlined">レンタルできません</Button>) :
            <Button sx={{ my: 3, py: 1, width: "100%", fontWeight: "bold" }} variant="contained">レンタル</Button>
          }
          <Typography sx={{ mt: 1, fontSize: "20px", fontWeight: "bold", color: "#666666" }}>商品の説明</Typography>
          <Typography sx={{ fontSize: "16px", color: "#666666" }}>ちょっとdocker使えないかも、自分でインストールしといてください。値切りは受け付けません。</Typography>
          <Typography sx={{ mt: 3, fontSize: "20px", fontWeight: "bold", color: "#666666" }}>オーナー</Typography>
          <Link to={'../user/' + item.ownerInfo.id}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                <Avatar src={item.ownerInfo.img}  sx={{"@media screen and (max-width:498px)": {width: 25, height: 25} }} alt="PeerPerk" />
            <Typography sx={{ fontSize: 16, "@media screen and (max-width:498px)": {fontSize: 14} }} >
              {item.ownerInfo.name}
            </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box id="comments" sx={{pt: 7}}>
        <SimpleTabs labels={['コメント', '取引履歴']}>
          <div id="comments">
            <Typography sx={{ mt: 3, mb: 1, fontSize: "20px", fontWeight: "bold", color: "#666666" }}>コメント({item.comments?.length ?? 0})</Typography>
            <Box sx={{ width: "100%", display: 'flex', "@media screen and (max-width:498px)": {flexDirection: "column"}}} >
              <Box sx={{width: "50%", "@media screen and (max-width:498px)": {width: "100%"}}}>
                {(item.comments ?? []).map((comment: { user_id: number; user_name: string; img: string; content: string; })  => (
                <Box sx={{ display: 'flex' }}>
                  <Link to={'../user/' + comment.user_id} style={{ textDecoration: 'none' }}>
                    <Avatar src={comment.img}  sx={{ mr: 1, width: 40, height: 40 ,"@media screen and (max-width:498px)": {width: 25, height: 25} }} alt="PeerPerk" />
                  </Link>
                  <Link to={'../user/' + comment.user_id} style={{ textDecoration: 'none' }}>
                    <Box sx={{ display: 'flex', flexDirection: "column"}}>
                      <Typography sx={{ fontWeight: "bold", fontSize: 16, "@media screen and (max-width:498px)": {fontSize: 14}, color: '#666666' }} >
                      {comment.user_name}
                      </Typography>
                      <Typography sx={{ mx: "auto", mt: 1, mb: 2, p: 1, width: "100%", borderRadius: 1 , fontSize: 16, backgroundColor: "#eee", color: 'black' }} >
                      {comment.content}
                      </Typography>
                    </Box>
                  </Link> 
                </Box>
                ))}
              </Box>
              <Stack component="form" noValidate 
                onSubmit={handleSubmit(onSubmit)} 
                spacing={1} sx={{ mt: 1, width: '50%', ml: 10, "@media screen and (max-width:498px)": {width: "100%", ml: 0} }}>
                <Typography sx={{ mb: 0, fontWeight: "bold", fontSize: "14px"}} >出品者へのコメント</Typography>
                <Controller
                  name="comment"
                  control={control}
                  rules={validationRules.comment}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      type="text"
                      label="コメントを入力"
                      error={fieldState.invalid}
                      helperText={fieldState.error?.message}
                      placeholder="コメントを入力してください。"
                      multiline
                      rows={4}
                      style={{ width: "100%" }}
                    />
                  )}
                />
                <Button onClick={() => showSnackbar('コメントを送信しました！', 'success')} variant="outlined" type="submit" style={{ width: "100%", fontWeight: "bold" , padding: "10px 0" ,marginTop: "20px"}} >
                  コメントを送信する
                </Button>
              </Stack>
            </Box>
          </div>
          <div id="transactions">
            <Typography sx={{ mt: 3, mb: 2, fontSize: "20px", fontWeight: "bold", color: "#666666" }}>取引履歴({item.transactions?.length ?? 0})</Typography>
            <Box style={{ display: "flex", flexDirection: "column", height: 400, width: '70%' }}>
              <DataGrid
              sx={{ px: 3, textAlign: 'center'}}
              rows={item.transactions ?? []}
              columns={columns}
              paginationModel={{ page: 0, pageSize: 50}}
              />
            </Box>
          </div>
        </SimpleTabs>
      </Box>
    </div>
  );
};

export default ItemDetail;
