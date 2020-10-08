import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import DropDown from "../components/DropDown";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Cookies } from "react-cookie";
import { insert } from "../redux/posts";

import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    btn: { margin: theme.spacing(1) },
  },
}));

const InsertBoard = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [post, setPost] = useState({
    category: "",
    title: "",
    content: "",
    views: 0,
  });

  const onChangeHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const onClickHandler = () => {
    if (post.header == "" || post.title == "" || post.contents == "") {
      setAlert(true);
    } else {
      console.log(post);
      dispatch(insert(post));
      props.history.push("/board");
    }
  };

  const [alert, setAlert] = useState(false);

  return (
    <form className={classes.root}>
      {alert && <Alert severity="error">모두 입력해 주세요</Alert>}

      <div>
        <DropDown
          title="말머리"
          value={["중고장터", "요가", "필라테스", "같이 운동해요", "기타"]}
          onChange={(value) => setPost({ ...post, header: value })}
        />

        <TextField
          name="title"
          label="제목"
          multiline
          fullWidth
          variant="outlined"
          value={post.title}
          onChange={(e) => onChangeHandler(e)}
        />

        <TextField
          name="contents"
          label="내용"
          multiline
          fullWidth
          variant="outlined"
          rows={10}
          onChange={(e) => onChangeHandler(e)}
          value={post.contents}
        />

        <Button
          style={{ margin: "3px" }}
          className="write-btn"
          variant="contained"
          color="primary"
          onClick={() => onClickHandler()}
        >
          글쓰기
        </Button>
      </div>
    </form>
  );
};

export default InsertBoard;
