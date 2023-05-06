import React, { useState } from "react";
import styles from "../homePage/HomePage.module.scss";
import {
  Avatar,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import SimpleTabs from "../../components/SimpleTabs";
import logo from "../../logo.jpg";

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

export const RequestList = () => {
  const myRequests = requestData.filter((request) => request.is_mine);

  return (
    <>
      <div className={styles.root}>
        <Box
          sx={{
            width: "90%",
            mx: "auto",
            "@media screen and (max-width:600px)": {
              width: "100%",
            },
          }}
        >
          <SimpleTabs labels={["全体", "マイリクエスト"]}>
            <div>
              {/* 全体のリクエスト表示 */}
              <Box sx={{ width: "100%", margin: "auto" }}>
                <Grid container spacing={4}>
                  {requestData.map((request) => (
                    <Grid item xs={6} md={4} lg={3} key={request.id}>
                      <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea href={"request/" + request.id}>
                          <CardContent sx={{ padding: 1 }}>
                            <Typography
                              sx={{ fontsize: "18px", mb: 2 }}
                              component="div"
                              className={styles.item_title}
                            >
                              {request.title}
                            </Typography>
                            <Typography
                              sx={{ fontsize: "18px", mb: 2 }}
                              component="div"
                              className={styles.request_content}
                            >
                              {request.content}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Avatar
                                alt={request.requester.name}
                                src={request.requester.img}
                                sx={{ width: 24, height: 24, mr: 1 }}
                              />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                className={styles.request_owner}
                              >
                                {request.requester.name}
                              </Typography>
                            </Box>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  href={"createRequest"}
                  className={styles.create_request_button}
                  aria-label="新規リクエスト"
                >
                  新規リクエスト
                </Button>
              </Box>
            </div>
            <div>
              {/* マイリクエスト表示 */}
              <Box sx={{ width: "100%", margin: "auto" }}>
                <Grid container spacing={4}>
                  {myRequests.map((myRequest) => (
                    <Grid item xs={6} md={4} lg={3} key={myRequest.id}>
                      <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea href={"request/" + myRequest.id}>
                          <CardContent sx={{ padding: 1 }}>
                            <Typography
                              sx={{ fontsize: "18px", mb: 2 }}
                              component="div"
                              className={styles.item_title}
                            >
                              {myRequest.title}
                            </Typography>
                            <Typography
                              sx={{ fontsize: "18px", mb: 2 }}
                              component="div"
                              className={styles.request_content}
                            >
                              {myRequest.content}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                              }}
                            >
                              <Avatar
                                alt={myRequest.requester.name}
                                src={myRequest.requester.img}
                                sx={{ width: 24, height: 24, mr: 1 }}
                              />
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                className={styles.request_owner}
                              >
                                {myRequest.requester.name}
                              </Typography>
                            </Box>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Button
                  href={"createRequest"}
                  className={styles.create_request_button}
                  aria-label="新規リクエスト"
                >
                  新規リクエスト
                </Button>
              </Box>
            </div>
          </SimpleTabs>
        </Box>
      </div>
    </>
  );
};
