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
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

  const borrowItemData = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      name: "パソコン",
      points: 100,
      returnDate: "2021/10/01",
      status: 2,
      owner: "なおき",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      name: "参考書",
      points: 100,
      returnDate: "",
      status: 1,
      owner: "けんてぃ",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      name: "ヘッドホン",
      points: 100,
      returnDate: "",
      status: 1,
      owner: "えいき",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      name: "キーボード",
      points: 100,
      returnDate: "",
      status: 0,
      owner: "りさ",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      name: "ケーブル",
      points: 70,
      date: "2021/10/01",
      returnDate: "2021/10/02",
      status: 2,
      owner: "おのかん",
    }
  ];

const BorrowHistory = () => {

const borrowingItems = borrowItemData.filter((item) => item.status == 0 || item.status == 1);
const returnedItems = borrowItemData.filter((item) => item.status == 2);


  return (
    <div>
      <Container
        sx={{
          textAlign: "right",
          padding: "0 10px 10px",
        }}
        >
          <h2 style={{ margin: 0, fontSize: "20px"}}>今月の消費ポイント:{'値埋め込み'}</h2>
        </Container>
      <SimpleTabs
        labels={["借用中", "返却済"]}
        children={[
          <div>
            <Container
              sx={{
                width: "100%",
                textAlign: "center",
                px: "10px",
                pt: 0
              }}
            >
              <List sx={{ mt: 0, width: "100%", bgcolor: "background.paper" }}>
                {borrowingItems.map((item) => (
                  <div>
                    <ListItem key={item.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <ListItemAvatar>
                            <Avatar alt="画像" sx={{ borderRadius: "5px" }} src={`${item.img}`} />
                          </ListItemAvatar>
                        </Grid>
                        <Grid item xs>
                          <ListItemText
                            primary={item.name}
                            secondary={item.date}
                          />
                        </Grid>
                        <Grid item xs>
                          <ListItemText
                            primary={<AndroidIcon/>}
                            secondary={item.owner}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <ListItemText
                            primary={<CurrencyExchangeIcon/>}
                            secondary={item.points}
                          />
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "right" }}>
                          <AlertButton
                            title={item.status == 0 ? "キャンセル" : "返却"}
                            message={`${item.status == 0 ? "キャンセル" : "返却"}しますか？`}
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
          <div>
            <Container
              sx={{
                width: "100%",
                textAlign: "center",
                padding: "0 10px 10px",
              }}
            >
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {returnedItems.map((item) => (
                  <div>
                    <ListItem key={item.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <ListItemAvatar>
                            <Avatar alt="画像" sx={{ borderRadius: "5px" }} src={`${item.img}`} />
                          </ListItemAvatar>
                        </Grid>
                        <Grid item xs>
                          <ListItemText
                            primary={item.name}
                            secondary={item.date}
                          />
                        </Grid>
                        <Grid item xs>
                          <ListItemText
                            primary={<AndroidIcon/>}
                            secondary={item.owner}
                          />
                        </Grid>
                        <Grid item xs>
                          <ListItemText
                            primary={<CurrencyExchangeIcon/>}
                            secondary={item.points}
                          />
                        </Grid>
                        <Grid item xs={3.5}>
                          <ListItemText
                            primary={<KeyboardReturnIcon/>}
                            secondary={item.returnDate}
                          />
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "right" }}>
                          <Button variant="contained" sx={{ fontWeight: "bold", right: "0" }}>
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

export default BorrowHistory;
