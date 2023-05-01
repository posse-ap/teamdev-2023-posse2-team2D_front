import React, {useState} from "react";
import styles from "./HomePage.module.scss";
import { Avatar, AvatarGroup, Fab, Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Tab, Tabs } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import event_default from '../../../event_default.jpg';
import logo from '../../../logo.jpg';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

type ItemData = {
  id: number;
  price: number;
  img: string[];
  title: string;
  author: string;
};

const itemData: ItemData[] = [
  {
    id: 1,
    price: 1000,
    img: [
      "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    ],
    title: "MacbookPro 2018 core i7 2.6GHz 16GB 512GB",
    author: "@bkristastucchio"
  },
  {
    id: 2,
    price: 1000,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Burger",
    author: "@rollelflex_graphy726"
  },
  {
    id: 3,
    price: 3000,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Camera",
    author: "@helloimnik"
  },
  {
    id: 4,
    price: 4000,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Coffee",
    author: "@nolanissac"
  },
  {
    id: 5,  
    price: 500,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Hats",
    author: "@hjrc33"
  },
  {
    id: 6,
    price: 600,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Honey",
    author: "@arwinneil"
  },
  {
    id: 7,
    price: 700,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Basketball",
    author: "@tjdragotta"
  },
  {
    id: 8,
    price: 800, 
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Breakfast",
    author: "@bkristastucchio"
  },
  {
    id: 9,
    price: 900,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Burger",
    author: "@rollelflex_graphy726"
  },
  {
    id: 10,
    price: 1000,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Camera",
    author: "@helloimnik"
  },
  {
    id: 11,
    price: 1100,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Coffee",
    author: "@nolanissac"
  },
  {
    id: 12,
    price: 1200,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Hats",
    author: "@hjrc33"
  },
  {
    id: 13,
    price: 1300,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Honey",
    author: "@arwinneil"
  },
  {
    id: 14,
    price: 1400,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Basketball",
    author: "@tjdragotta"
  },
  {
    id: 15,
    price: 1500,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Breakfast",
    author: "@bkristastucchio"
  },
  {
    id: 16,
    price: 1600,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Burger",
    author: "@rollelflex_graphy726"
  },
  {
    id: 17,
    price: 1700,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Camera",
    author: "@helloimnik"
  },
  {
    id: 18,
    price: 1800,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Coffee",
    author: "@nolanissac"
  },
  {
    id: 19,
    price: 1900,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Hats",
    author: "@hjrc33"
  },
  {
    id: 20,
    price: 2000,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Honey",
    author: "@arwinneil"
  },
  {
    id: 21,
    price: 2100,
    img: ["https://images.unsplash.com/photo-1551782450-a2132b4ba21d"],
    title: "Basketball",
    author: "@tjdragotta"
  },
];

type KnowledgeData = {
  id: number;
  img?: string;
  title: string;
  author: string;
  participants?: { name: string; img: string;}[];
};

const knowledgeData: KnowledgeData[] = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Breakfast",
    author: "@bkristastucchio",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Burger",
    author: "@rollelflex_graphy726",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 3,
    // img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 4,
    // img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    // participants: [
    //   {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    //   {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    //   {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    //   {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    // ]
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 7,
    // img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 13,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 14,
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 15,
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 16,
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "knowledge",
    author: "@kashiken",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 17,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "knowledge",
    author: "@kashiken",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 18,
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "knowledge",
    author: "@kashiken",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 19,
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
  {
    id: 21,
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
    participants: [
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
      {name: "tarp", img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} ,
    ]
  },
];

export const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active)
  }

  return (
    <>
    <div className={styles.root}>
    <Box sx={{ width: "90%", mx: "auto", "@media screen and (max-width:600px)": {
        width: "100%",
    }, }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="商品" {...a11yProps(0)} />
          <Tab label="ナレッジ" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {/* 商品表示 */}
        <Box
      sx={{
        width: "100%",
        margin: "auto",
      }}>
          <Grid container spacing={4}>
            {itemData.map((item) => (
              <Grid item xs={6} md={4} lg={3} key={item.id}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea href={'page' + item.id}>
                    <CardMedia
                      className={styles.card_img}
                      component="img"
                      height="230"
                      image={`${item.img[0]}`}
                      alt="商品画像"
                    />
                    <BookmarkBorderIcon key={item.id} onClick={classToggle} className={active ? styles.save_icon2 : styles.save_icon} />
                    <BookmarkIcon key={item.id} onClick={classToggle} className={active ? styles.save_icon : styles.save_icon2} />
                    <Typography sx={{fontsize: "14px"}} component="div" className={styles.item_price}>
                      {item.price}pt
                    </Typography>
                    <CardContent sx={{padding: 1}}>
                      <Typography sx={{fontsize: "18px"}} component="div" className={styles.item_title}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className={styles.item_author}>
                      {item.author}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Fab href={'lendItem'} className={styles.fixed_button} aria-label="貸し出す">
            貸し出す
          </Fab>
        </Box>      
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* ナレッジ表示 */}
        <Box
      sx={{
        width: "100%",
        margin: "auto",
      }}>
          <Grid container spacing={4}>
            {knowledgeData.map((item) => (
              <Grid item xs={6} md={4} lg={3} key={item.id}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardActionArea href={'page' + item.id}>
                    <CardMedia
                      className={styles.card_img}
                      component="img"
                      height="230"
                      image={`${item.img ?? event_default }`}
                      alt="ナレッジ画像"
                    />
                    <BookmarkBorderIcon key={item.id} onClick={classToggle} className={active ? styles.save_icon2 : styles.save_icon} />
                    <BookmarkIcon key={item.id} onClick={classToggle} className={active ? styles.save_icon : styles.save_icon2} />
                    <CardContent sx={{padding: 1}}>
                      <Typography sx={{fontsize: "18px"}} component="div" className={styles.item_title}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className={styles.item_author}>
                      {item.author}
                      </Typography>
                      <AvatarGroup total={item.participants?.length ?? 0} className={styles.avatar}>
                        {(item.participants ?? []).map((participant: { name: string; img: string; })  => (
                          <Avatar alt={participant.name} src={participant.img} />
                        ))}
                        {(!item.participants || item.participants.length === 0) && (
                          <Avatar alt="参加予定者0人" src={logo} />
                        )}
                      </AvatarGroup>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Fab href={'holdEvent'} className={styles.fixed_button} aria-label="開催する">
            開催する
          </Fab>
        </Box>
      </TabPanel>
    </Box>
    </div>
    </>
  );
}
