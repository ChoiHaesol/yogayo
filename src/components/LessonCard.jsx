import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOn from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "1rem",
    borderRadius:"10px",
    background:"#fff"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
  diaryBtnBox:{
    float:"right"
  }
});

export default function LessonCard(props) {
  const classes = useStyles();
  const {name, admin_name, date} = props.content;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <LocationOn className={classes.locationIcon} />
          <span>{admin_name}</span>에서 &nbsp;
          <b>{date.slice(5,7)}월 {date.slice(8,10)}일</b> 수강한
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {name} 수업은 어떠셨나요?
        </Typography>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
        </Typography>
      </CardContent>
      <CardActions className={classes.diaryBtnBox}>
        <Button variant="contained" color="primary" size="large" onClick={props.onClick} className={classes.diaryBtn}>일기 작성하기</Button>
      </CardActions>
    </Card>
  );
}