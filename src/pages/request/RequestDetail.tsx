import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../homePage/HomePage.module.scss";
import { Box, Button, Grid, Typography } from "@mui/material";
import logo from "../../logo.jpg";
import AlertButton from "../../components/Alertbutton";

export type RequestData = {
  id: number;
  title: string;
  requester: { name: string; img: string };
  content: string;
  state: number; //リクエスト状態 1:リクエスト中 2:出品されたもの
  is_mine: boolean;
};

export const requestData: RequestData[] = [
  {
    id: 1,
    title: "AirPods Pro",
    requester: {
      name: "2期生 あさか",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },
    content:
      "チーム開発のために２ヶ月ほどお借りしたいなとおもってます！これ以上にスペックが高いとそれは更にうれしいです。",
    state: 1,
    is_mine: false,
  },
  {
    id: 2,
    title: "ポケットwifi",
    requester: {
      name: "2期生 鹿島健太",
      img: logo,
    },
    content: "チーム開発のために２ヶ月ほどお借りしたいなとおもってます！",
    state: 1,
    is_mine: true,
  },
  {
    id: 3,
    title: "MacBook Pro 2018 core i7 2.6GHz 16GB 512GB",
    requester: {
      name: "2期生 鹿島健太",
      img: logo,
    },
    content: "チーム開発のために２ヶ月ほどお借りしたいなとおもってます！",
    state: 1,
    is_mine: true,
  },
  {
    id: 4,
    title: "MacBook Pro 2018 core i7 2.6GHz 16GB 512GB",
    requester: {
      name: "@bkristastucchio",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },
    content: "チーム開発のために２ヶ月ほどお借りしたいなとおもってます！",
    state: 1,
    is_mine: false,
  },
  {
    id: 5,
    title: "MacBook Pro 2018 core i7 2.6GHz 16GB 512GB",
    requester: {
      name: "2期生 鹿島健太",
      img: logo,
    },
    content: "チーム開発のために２ヶ月ほどお借りしたいなとおもってます！",
    state: 1,
    is_mine: true,
  },
  {
    id: 6,
    title: "MacBook Pro 2018 core i7 2.6GHz 16GB 512GB",
    requester: {
      name: "@bkristastucchio",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },
    content: "チーム開発のために２ヶ月ほどお借りしたいなとおもってます！",
    state: 1,
    is_mine: false,
  },
  {
    id: 7,
    title: "MacBook Pro 2018 core i7 2.6GHz 16GB 512GB",
    requester: {
      name: "2期生 鹿島健太",
      img: logo,
    },
    content: "チーム開発のために２ヶ月ほどお借りしたいなとおもってます！",
    state: 1,
    is_mine: true,
  },
  {
    id: 8,
    title: "MacBook Pro 2018 core i7 2.6GHz 16GB 512GB",
    requester: {
      name: "@bkristastucchio",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    },
    content: "チーム開発のために２ヶ月ほどお借りしたいなとおもってます！",
    state: 1,
    is_mine: false,
  },
];

const RequestDetail = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const requestId = parseInt(useParams<{ id: string }>().id ?? "", 10);
  const request = requestData.find(
    (r: { id: number }) => r.id === Number(requestId)
  );

  if (!request) {
    return <div>リクエストが見つかりませんでした。</div>;
  }
  return (
    <div className={styles.root}>
      <h1 style={{ fontSize: "24px", textAlign: "center" }}>リクエスト詳細</h1>
      <Box sx={{ mx: "auto", width: "40%" }}>
        <Typography
          sx={{
            mt: 3,
            mb: 1,
            fontSize: "20px",
            fontWeight: "bold",
            color: "#666666",
          }}
        >
          商品名
        </Typography>
        <Typography
          style={{ marginBottom: 3, fontSize: "20px", color: "#666666" }}
        >
          {request.title}
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontSize: "20px",
            fontWeight: "bold",
            color: "#666666",
          }}
        >
          詳細
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "#666666" }}>
          {request.content}
        </Typography>
      </Box>
      {request.is_mine ? (
        <>
          <Grid
            item
            xs={12}
            sx={{ textAlign: "center", mb: 3 }}
            className={styles.buttons}
          >
            <Button
              href={"edit/" + request.id}
              className={styles.edit_request}
              aria-label="編集"
            >
              編集
            </Button>
            {/* <Button
              // href={"deleteRequest"}
              className={styles.delete_request}
              aria-label="削除"
            > */}
              <AlertButton
                sx={{ width: "500px", color: "white",}}
                title={"削除"}
                message={`${
                  "削除"
                }しますか？`}
                variant={"contained"}
              />
            {/* </Button> */}
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sx={{ textAlign: "center", mb: 3 }}>
            <Button
              href={"../lendItem"}
              className={styles.lend_item}
              aria-label="この商品を貸し出す"
            >
              この商品を貸し出す
            </Button>
          </Grid>
        </>
      )}
      <Grid
        item
        xs={12}
        className={styles.back_to_list}
        sx={{ textAlign: "center" }}
      >
        <Button href={"../requestList"}>リクエスト一覧ページにもどる</Button>
      </Grid>
    </div>
  );
};

export default RequestDetail;
