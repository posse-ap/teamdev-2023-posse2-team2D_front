import SimpleTabs from "../../components/SimpleTabs";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AndroidIcon from "@mui/icons-material/Android";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AlertButton from "../../components/Alertbutton";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";

const lendItemData = [
  {
    id: 1,
    name: "パソコン",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    points: 100,
    date: "2021/10/01",
    status: 3,
  },
  {
    id: 2,
    name: "ディスプレイ",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    points: 200,
    date: "2021/10/02",
    status: 1,
  },
  {
    id: 3,
    name: "カメラ",
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    points: 300,
    date: "2021/10/03",
    status: 2,
  },
  {
    id: 5,
    name: "充電器",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    points: 100,
    date: "2021/10/01",
    status: 3,
    borrower: "かしけん",
  },
  {
    id: 6,
    name: "ディスプレイ",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    points: 200,
    date: "2021/10/02",
    status: 1,
    borrower: "かしけん",
  },
  {
    id: 9,
    name: "マウス",
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    points: 300,
    date: "2021/10/03",
    status: 2,
    borrower: "かしけん",
  },
  {
    id: 100,
    name: "トランプ",
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    points: 10000,
    date: "2021/10/01",
    status: 3,
  },
  {
    id: 200,
    name: "GitHubアカウント",
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    points: 20000,
    date: "2021/10/02",
    status: 1,
  },
  {
    id: 300,
    name: "イヤホン",
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    points: 300,
    date: "2021/10/03",
    status: 2,
  },
];

const LentHistory = () => {

const forSaleItems = lendItemData.filter((item) => item.status == 1);
const lendingItems = lendItemData.filter((item) => item.status == 2);
const requestingItems = lendItemData.filter((item) => item.status == 3);


  return (
    <div>
      <Container
        sx={{
          textAlign: "right",
          padding: "0 10px 10px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "20px" }}>
          月末獲得ポイント:{"値埋め込み"}
        </h2>
      </Container>
      <SimpleTabs
        labels={["出品中", "貸出中", "貸し出し申請中"]}
        children={[
          <div>
            <Container
              sx={{
                width: "100%",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {forSaleItems.map((item) => (
                  <div>
                    <ListItem key={item.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={1}>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ borderRadius: "5px" }}
                              alt="画像"
                              src={`${item.img}`}
                            />
                          </ListItemAvatar>
                        </Grid>
                        <Grid item xs={2}>
                          <ListItemText
                            primary={item.name}
                            secondary={item.date}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <ListItemText
                            primary={<CurrencyExchangeIcon />}
                            secondary={item.points}
                          />
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "right" }}>
                          <Button
                            variant="contained"
                            sx={{ fontWeight: "bold", right: "0" }}
                          >
                            詳細
                          </Button>
                        </Grid>
                        {/* <Grid item xs={3} sx={{ textAlign: "right" }}>
                          <Grid container spacing={1}>
                            <Grid item xs={6}>
                              <Button variant="contained" sx={{right: "0" }}>
                                詳細
                              </Button>
                            </Grid>
                            <Grid item xs={6}>
                              <AlertButton
                                title={item.status == 0 ? "非公開" : "公開開始"}
                                message={`${item.status == 0 ? "非公開" : "公開開始"}しますか？`}
                                variant={item.status == 0 ? "contained" : "outlined"}
                              />
                            </Grid>
                          </Grid>
                        </Grid> */}
                      </Grid>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </div>
                ))}
              </List>
            </Container>
          </div>,
          <div>
            <Container
              sx={{
                width: "100%",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {lendingItems.map((item) => (
                  <div>
                    <ListItem key={item.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ borderRadius: "5px" }}
                              alt="画像"
                              src={`${item.img}`}
                            />
                          </ListItemAvatar>
                        </Grid>
                        <Grid item xs={2}>
                          <ListItemText
                            primary={item.name}
                            secondary={item.date}
                          />
                        </Grid>
                        <Grid item xs>
                          <ListItemText
                            primary={<AndroidIcon />}
                            secondary={item.borrower}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <ListItemText
                            primary={<CurrencyExchangeIcon />}
                            secondary={item.points}
                          />
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "right" }}>
                          <Button
                            variant="contained"
                            sx={{ fontWeight: "bold", right: "0" }}
                          >
                            詳細
                          </Button>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider
                      variant="inset"
                      component="li"
                      sx={{ width: "100%" }}
                    />
                  </div>
                ))}
              </List>
            </Container>
          </div>,
          <div>
            <Container
              sx={{
                width: "100%",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {requestingItems.map((item) => (
                  <div>
                    <ListItem key={item.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={1}>
                          <ListItemAvatar>
                            <Avatar
                              sx={{ borderRadius: "5px" }}
                              alt="画像"
                              src={`${item.img}`}
                            />
                          </ListItemAvatar>
                        </Grid>
                        <Grid item xs={2}>
                          <ListItemText
                            primary={item.name}
                            secondary={item.date}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <ListItemText
                            primary={<CurrencyExchangeIcon />}
                            secondary={`${item.points}希望`}
                          />
                        </Grid>
                        <Grid item xs={4} sx={{ textAlign: "right" }}>
                          <AlertButton
                            title="申請を取り下げ"
                            message="申請を取り下げますか？"
                            variant="contained"
                          />
                        </Grid>
                        <Grid item xs={2} sx={{ textAlign: "right" }}>
                          <Button
                            variant="contained"
                            sx={{ fontWeight: "bold", right: "0" }}
                          >
                            詳細
                          </Button>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </div>
                ))}
              </List>
            </Container>
          </div>,
        ]}
      />
    </div>
  );
};

export default LentHistory;
