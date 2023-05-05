import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import styles from "./Sample1Page.module.scss";

export const Sample1Page =() => {
  const cardsData = [
    {
      title: 'Lizard 1',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: '/logo192.png',
    },
    {
      title: 'Lizard 2',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: '/logo192.png',
    },
    {
      title: 'Lizard 3',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: '/logo192.png',
    },
  ];
  
  return (
    <div className={styles.root}>
      {cardsData.map((cardData) => (
        <Card key={cardData.title} className={styles.card}>
          <CardMedia sx={{ height: 140 }} image={cardData.image} title={cardData.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardData.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
