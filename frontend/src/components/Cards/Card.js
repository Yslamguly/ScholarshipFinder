import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../../styles/Card.css';
import { Link } from 'react-router-dom';

export default function CardInfo(props) {
  const description = props.data.description.slice(0, 200) + "  .........";

  return (
    <div className='cards'>
      <Link to={`/Scholarship/${props.data.id}`}>
        <Card sx={{ maxWidth: 345, minWidth: 345, margin: 1}}>
          <CardActionArea>
            <CardMedia sx={{height:140}}
              component="img"
              height="140"
              image={props.data.image}
              alt="scholarship"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.data.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ marginBottom:2}}>
              {props.data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ marginLeft: 29 }}>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>
      </Link>
    </div>
  );
}