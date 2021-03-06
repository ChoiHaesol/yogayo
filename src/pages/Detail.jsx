import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openDeleteModal } from "../redux/modal";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import Avatar from "@material-ui/core/Avatar";
import { Column, Row, Item } from "@mui-treasury/components/flex";
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from "@mui-treasury/components/info";
import { useChatzInfoStyles } from "@mui-treasury/styles/info/chatz";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Cookies } from "react-cookie";
import DeleteBookingModal from "../components/modal/DeleteBookingModal";
const useStyles = makeStyles((theme) => ({
  replyInput: {
    height: 50,
  },
  imgsContainer: {
    display: "flex",
    justifyContent: "space-between",
    verticalAlign: "middle",
    flexWrap: "wrap",
    marginTop: "2rem",
  },
  imgBox: {
    textAlign: "center",
    margin: "auto",
    padding: "1rem",
  },
  img: {
    borderRadius: "10px",
    width: "100%",
  },

  btn: {
    marginRight: theme.spacing(1),
  },
}));

const Detail = (props) => {
  const classes = useStyles();
  let postId = props.match.params.id;
  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    post: postId,
    content: "",
  });
  const [myInfo, setMyInfo] = useState({});

  const commentCall = () => {
    const commentApiUrl = `http://api.yogayo.kr/api/posts/${postId}/comment`;
    axios
      .get(commentApiUrl)
      .then((response) => {
        console.log("댓글:", response.data);
        setComments(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  const postCall = () => {
    const postApiUrl = `http://api.yogayo.kr/api/posts/${postId}`;
    axios
      .get(postApiUrl)
      .then((response) => {
        console.log("조회목록데이터:", response.data);
        setPost(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  const myInfoCall = () => {
    // 로그인 유저 정보 불러오기
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");
    const myInfoApiUrl = `http://api.yogayo.kr/api/myinfo/`;
    axios
      .get(myInfoApiUrl, { headers: { Authorization: `Token ${userToken}` } })
      .then((response) => {
        setMyInfo(response.data[0]);
        // console.log("로그인 유저", response.data[0]);
      })
      .catch((response) => {
        console.error(response);
      });
  };

  useEffect(() => {
    postCall();
    commentCall();
    myInfoCall();
  }, []);

  const commentInputChange = (e) => {
    setNewComment({ ...newComment, content: e.target.value });
  };

  const commentSubmit = () => {
    let cookies = new Cookies();
    const userToken = cookies.get("usertoken");

    console.log("저장된 쿠키토큰값:", userToken);

    axios({
      method: "post",
      url: `http://api.yogayo.kr/api/posts/${postId}/comment/`,
      data: newComment,
      headers: {
        Authorization: `Token 	${userToken}`,
      },
      // headers: { "Content-Type": "multipart/form-data" }, //:파일데이터 보낼 때 컨텐츠 유형임.
    })
      .then(function (response) {
        console.log(response);
        setNewComment({ ...newComment, content: "" });
        commentCall();
      })
      .catch(function (response) {
        console.error(response);
      });
  };
  const openModal = () => {
    dispatch(openDeleteModal());
  };
  return (
    <div>
      <Paper>
        <CardContent>
          <TextInfoContent
            useStyles={useN01TextInfoContentStyles}
            overline={
              String(post.created).substring(0, 10) + " " + post.username
            }
            heading={`[${post.category}] ${post.title}`}
            body={post.content}
          />

          <div className={classes.imgsContainer}>
            <div className={classes.imgBox}>
              <img src={post.img_path1} className={classes.img} />
            </div>
            <div className={classes.imgBox}>
              <img src={post.img_path2} className={classes.img} />
            </div>
            <div className={classes.imgBox}>
              <img src={post.img_path3} className={classes.img} />
            </div>
            <div className={classes.imgBox}>
              <img src={post.img_path4} className={classes.img} />
            </div>
          </div>
        </CardContent>
        <Divider />
        <Column gap={2}>
          {comments.map((comment, index) => {
            return (
              <Row mt={2} alignItems={"center"} key={index}>
                <Item position={"middle"}>
                  <Avatar>
                    {comment.img_profile ? (
                      <img
                        src={`http://api.yogayo.kr/media/${comment.img_profile}`}
                        style={{ width: "100%" }}
                      />
                    ) : null}
                  </Avatar>
                </Item>
                <Info useStyles={useChatzInfoStyles}>
                  <InfoTitle>{comment.username}</InfoTitle>
                  <InfoSubtitle>{comment.content}</InfoSubtitle>
                  <InfoCaption>{comment.created.substring(0, 10)}</InfoCaption>
                </Info>
              </Row>
            );
          })}

          <Row mt={2} alignItems={"center"}>
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                className={classes.replyInput}
                id="outlined-adornment-amount"
                value={newComment.content}
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => commentSubmit()}
                    >
                      댓글 달기
                    </Button>
                  </InputAdornment>
                }
                placeholder="댓글을 입력하세요.."
                onChange={(e) => commentInputChange(e)}
              />
            </FormControl>
          </Row>
          <Row mt={2} alignItems={"center"}>
            <Button
              className={classes.btn}
              variant="outlined"
              color="primary"
              onClick={() => props.history.goBack()}
            >
              뒤로가기
            </Button>
            {post.username == myInfo.username && (
              <>
                {/* <Button
                  className={classes.btn}
                  variant="outlined"
                  color="primary"
                  onClick={() => props.history.push(`/board/modify/${postId}`)}
                >
                  수정
                </Button> */}
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  // onClick={() => onDelete()}
                  onClick={openModal}
                >
                  삭제
                </Button>
              </>
            )}
          </Row>
        </Column>
      </Paper>
      <DeleteBookingModal postId={postId} />
    </div>
  );
};

export default Detail;
