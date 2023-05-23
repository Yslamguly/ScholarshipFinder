import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../../styles/Card.css';
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

export default function CardInfo(props) {



  const description = props.data.description.slice(0, 200) + "  .........";
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate(`/Scholarship/${props.data.id}`);
    navigate(0);
  }



  return (
    <div className='cards'>
        <Card sx={{ maxWidth: 345, minWidth: 345, margin: 1}}>
          <CardActionArea>
            <CardMedia sx={{height:140}}
              component="img"
              height="140"
              image={props.data.image}
              alt="scholarship"
            />
            <CardContent onClick={refreshPage}>
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
            <Button size="small" color="primary" onClick={refreshPage}>
              Read More
            </Button>
            {props.deleteButton ? <IconButton aria-label="delete" size="medium" color="error" onClick={()=>props.onDeleteScholarship(props.data.id)}>
              <DeleteIcon fontSize="inherit"/>
            </IconButton> : null }
          </CardActions>
        </Card>
    </div>
  );
}
