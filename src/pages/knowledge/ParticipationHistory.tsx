import SimpleTabs from "../../components/SimpleTabs";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AndroidIcon from "@mui/icons-material/Android";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const ParticipationHistory = () => {

  const ReservedData = [
    {
      id: 1,
      name: "ハッカソンしませんか？",
      points: 100,
      date: "2021/10/01",
      owner: "なおき",
      status: 0,
    },
    {
      id: 1,
      name: "SaaS勉強会",
      points: 100,
      date: "2021/10/01",
      owner: "なおき",
      status: 0,
    }
  ];

  const ParticipatedData = [
    {
      id: 1,
      name: "htmlから頑張りましょう",
      points: 100,
      date: "2021/10/01",
      owner: "なおき",
      status: 0,
    },
    {
      id: 1,
      name: "AWS勉強会",
      points: 100,
      date: "2021/10/01",
      owner: "なおき",
      status: 0,
    }
  ];

  return (
    <div>
      <Container
        sx={{
          textAlign: "right",
          padding: "0 10px 10px",
        }}
      >
        <h2 style={{margin: 0, fontSize: "20px"}}>今月の消費ポイント:{"値埋め込み"}</h2>
      </Container>
      <SimpleTabs
        labels={["予約中", "参加済"]}
        children={[
          <div>
            <Container
              sx={{
                width: "100%",
                textAlign: "center",
                padding: "0 10px",
              }}
            >
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {ReservedData.map((knowledge) => (
                  <div>
                    <ListItem key={knowledge.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={3}>
                          <ListItemText
                            primary={knowledge.name}
                            secondary={knowledge.date}
                          />
                        </Grid>
                        <Grid item xs={1}>
                          <ListItemText
                            primary={<AndroidIcon />}
                            secondary={knowledge.owner}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <ListItemText
                            primary={<CurrencyExchangeIcon />}
                            secondary={knowledge.points}
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
          <div>
            <Container
              sx={{
                width: "100%",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                {ParticipatedData.map((knowledge) => (
                  <div>
                    <ListItem key={knowledge.id}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={3}>
                          <ListItemText
                            primary={knowledge.name}
                            secondary={knowledge.date}
                          />
                        </Grid>
                        <Grid item xs={1}>
                          <ListItemText
                            primary={<AndroidIcon />}
                            secondary={knowledge.owner}
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <ListItemText
                            primary={<CurrencyExchangeIcon />}
                            secondary={knowledge.points}
                          />
                        </Grid>
                        <Grid item xs={3} sx={{ textAlign: "right" }}>
                          <Button variant="contained" sx={{ right: "0" }}>
                            感謝を伝える
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

export default ParticipationHistory;
