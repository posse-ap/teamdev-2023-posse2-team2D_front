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
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Container from "@mui/material/Container";

const LentHistory = () => {
  const HeldData = [
    {
      id: 1,
      name: "ハッカソンしませんか？",
      member: 5,
      points: 100,
      date: "2021/10/01",
      status: 0,
    },
    {
      id: 1,
      name: "React勉強会",
      member: 8,
      points: 100,
      date: "2021/10/01",
      status: 1,
    },
  ];

  return (
    <div>
      <Container
        sx={{
          textAlign: "right",
          padding: "10px",
        }}
      >
        <h2>月末獲得ポイント:{"値埋め込み"}</h2>
      </Container>
      <Container
        sx={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {HeldData.map((knowledge) => (
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
                      primary={<PeopleAltIcon />}
                      secondary={`${knowledge.member}人`}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <ListItemText
                      primary={<CurrencyExchangeIcon />}
                      secondary={`合計${knowledge.points}`}
                    />
                  </Grid>
                  <Grid item xs={3} sx={{ textAlign: "right" }}>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Button variant="contained" sx={{ right: "0" }}>
                          開催報告
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <AlertButton
                          title={
                            knowledge.status == 0 ? "開催停止" : "開催再開"
                          }
                          message={`${
                            knowledge.status == 0 ? "開催を停止" : "開催を再開"
                          }しますか？`}
                          variant={`${
                            knowledge.status == 0 ? "contained" : "outlined"
                          }`}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default LentHistory;
