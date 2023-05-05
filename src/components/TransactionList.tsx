// import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Item from '@mui/material/Grid';
import AndroidIcon from '@mui/icons-material/Android';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AlertButton from './Alertbutton';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Container from '@mui/material/Container';

const TransactionList = () => {
  // const [selectedItem, setSelectedItem] = React.useState(null); // 選択されたアイテムを保持するステート
  // const [openModal, setOpenModal] = React.useState(false); // モーダルを開くかどうかを制御するステート

  // const handleOpenModal = (item) => { // モーダルを開く
  //   setSelectedItem(item);
  //   setOpenModal(true);
  // };

  // const handleCloseModal = () => { // モーダルを閉じる
  //   setOpenModal(false);
  // };

  return (
    <Container
          sx={{
            width: "100%",
            textAlign: "center",
            padding: "10px",
          }}
        >
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
       {itemData.map((item) => (
      <div>
      <ListItem key={item.id}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ListItemAvatar>
            <Avatar alt='画像' src={`${item.img}`} />
          </ListItemAvatar>
        </Grid>
        <Grid item xs={3}>
          <ListItemText primary={item.name} secondary={item.date} />
        </Grid>
        <Grid item xs={1}>
          <ListItemText primary={<CurrencyExchangeIcon />} secondary={item.points} />
        </Grid>
        <Grid item xs={5}>
          <ListItemText primary={<AndroidIcon />} secondary={item.owner} />
        </Grid>
        <Grid item>
        <Button variant='contained' sx={{right: '0'}}>詳細</Button>
        </Grid>
        <Grid item xs sx={{textAlign: 'right'}}>
        <AlertButton title={item.status == 0 ? '非表示' : '再表示'} />
        </Grid>
      </Grid>
    </ListItem>
    <Divider variant="inset" component="li" />
    </div>
       ))}
    </List>
    </Container>
//     <div>
//       <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
//   {itemData.map((item) => (
//     <div key={item.id}>
//       <ListItem disablePadding>
//         <Grid
//           container
//           direction="row"
//           justifyContent="space-between"
//           alignItems="center"
//           sx={{ width: '100%' }}
//         >
//           <Grid item sx={{ width: '80%' }}>
//               <ListItemAvatar>
//                 <Avatar alt='画像' src={`${item.img}`} />
//               </ListItemAvatar>
//               <Grid
//                 container
//                 spacing={3}
//                 direction="row"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <Grid item xs={2}>
//                   <Item>
//                     <ListItemText id={`${item.id}`} primary={`${item.name}`} />
//                   </Item>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Grid
//                     container
//                     direction="row"
//                     justifyContent="flex-start"
//                     alignItems="center"
//                   >
//                     <Grid item>
//                       <DateRangeIcon />
//                     </Grid>
//                     <Grid item>
//                       <ListItemText primary={`${item.date}`} />
//                     </Grid>
//                   </Grid>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Grid
//                     container
//                     direction="row"
//                     justifyContent="flex-start"
//                     alignItems="center"
//                   >
//                     <Grid item>
//                       <CurrencyExchangeIcon />
//                     </Grid>
//                     <Grid item>
//                       <ListItemText primary={`${item.points}`} />
//                     </Grid>
//                   </Grid>
//                 </Grid>
//                 <Grid item xs={2}>
//                   <Grid
//                     container
//                     direction="row"
//                     justifyContent="flex-start"
//                     alignItems="center"
//                   >
//                     <Grid item>
//                       <AndroidIcon />
//                     </Grid>
//                     <Grid item>
//                       <ListItemText primary={`${item.owner}`} />
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//           </Grid>
//           <Grid item>
//             <Grid container direction="row" alignItems="center">
//               <Grid item>
//                 <Button>詳細</Button>
//               </Grid>
//               <Grid item>
//                 <AlertButton title={item.status == 0 ? '非表示' : '再表示'} />
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </ListItem>
//       <Divider variant="inset" component="li" />
//     </div>
//   ))}
// </List>

//       </div>
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
