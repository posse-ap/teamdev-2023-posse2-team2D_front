import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import AlertButton from './Alertbutton';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import AndroidIcon from '@mui/icons-material/Android';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DateRangeIcon from '@mui/icons-material/DateRange';

const TransactionList = () => {
  return (
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
    {itemData.map((item) => (
      <div key={item.id}>
        <ListItem
          secondaryAction={
            <AlertButton
              title={item.status == 0 ? '非表示' : '再表示'}
            />
          }
          disablePadding
        >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar alt='画像' src={`${item.img}`} />
            </ListItemAvatar>
            <Grid
              container
              spacing={3}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ width: '100%' }} // Grid全体の幅を100%にする
            >
              <Grid item xs={2}>
                <Item>
                  <ListItemText id={`${item.id}`} primary={`${item.name}`} />
                </Item>
              </Grid>
              <Grid item xs={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <DateRangeIcon />
                  </Grid>
                  <Grid item>
                    <ListItemText primary={`${item.date}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <CurrencyExchangeIcon />
                  </Grid>
                  <Grid item>
                    <ListItemText primary={`${item.points}`} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <AndroidIcon />
                  </Grid>
                  <Grid item>
                    <ListItemText primary={`${item.owner}`} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ListItemButton>
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    ))}
  </List>
  
  );
}
export default TransactionList;

const itemData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    name: "Breakfast",
    points: 100,
    date: "2021/10/01",
    status: 0,
    owner: "bkristastucchio",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    name: "Burger",
    points: 200,
    date: "2021/10/02",
    status: 1,
    owner: "rollelflex",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    name: "Camera",
    points: 300,
    date: "2021/10/03",
    status: 2,
    owner: "helloimnik",
  },
];
