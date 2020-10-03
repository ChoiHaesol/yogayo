import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeDiaryModal, openDiaryModal } from "../redux/modal";
import DiaryCard from "../components/DiaryCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DiaryModal from "../components/DiaryModal";
import axios from "axios";

const Diary = () => {
  const [pendingContents, setPendingContents] = useState([
    {
      id: 1,
      sessionDate: new Date(),
      place: "간디룸",
      sessionName: "기초 요가",
      companyName: "자메이카 요가 필라테스 센터",
      diaryText: "솔방울님, 은 어떠셨나요?",
      feeling: "good",
    },
  ]);
  const apiUrl = `http://127.0.0.1:8000/api/diaries/`;
  const apiCall = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        setContents(response.data);
      })
      .catch((response) => {
        console.error(response);
      });
  };
  useEffect(() => {
    apiCall();
  }, []);
  const [contents, setContents] = useState([
    // content: "오늘 수업 너무 좋았다 기분 상쾌 통쾌~!"
    // created: "2020-10-03T07:02:36.043101Z"
    // id: 2
    // img_path: "http://127.0.0.1:8000/IMG_5832.HEIC"
    // likes: 0
    // mood: 2
    // userLesson: 2
    // userLesson_id: 2
    // {
    //   id: 1,
    //   sessionDate: new Date(),
    //   place: "간디룸",
    //   sessionName: "기초 요가",
    //   companyName: "자메이카 요가 필라테스 센터",
    //   imgSrc: "1",
    //   diaryText:
    //     "비가 많이 내려서 그런 걸까요? 오늘따라 기상과 동시에 어찌나 뼈마디가 쑤시던지..😔 오랜만에 요가 매트 펼치고 #모닝요가 시원하게 했어요. 🧘‍♀️ 확실히 오랜만에 하니까 온 몸이 뻐근하고 아이고 아이고 소리가 절로 나와서 얼마나 민망하던지요 😅",
    //   feeling: "good",
    // },
    // {
    //   id: 2,
    //   sessionDate: new Date(),
    //   place: "간디룸",
    //   sessionName: "기초 요가",
    //   companyName: "자메이카 요가 필라테스 센터",
    //   imgSrc: "2",
    //   diaryText:
    //     "발도 떼지 못했던 작년... 수련은 거짓말을 하지않는다 심란한 이시국에 한발이든 두발이든 중심잡고 흔들리지 않게 서보자는 의미에서 이번달 주제는 #하체단련하기",
    //   feeling: "good",
    // },
    // {
    //   id: 3,
    //   sessionDate: new Date(),
    //   place: "간디룸",
    //   sessionName: "기초 요가",
    //   companyName: "자메이카 요가 필라테스 센터",
    //   imgSrc: "3",
    //   diaryText:
    //     "보이차하고 요가하고 🍵🙏🏻 꾸준함에 끈기, 행하고 보고 바로잡고 다시 시도하는 것. 두려움을 넘어야 그 희열이 찾아온다 - 요가로 하여금 늘 많은 것을 배운다. 요가를 더 오래 하고자 시작하여 호흡 몇번에 땀이 나고 온몸이 떨려오는 오늘도 완전호흡하는 수련자라 너무 좋은 요즘",
    //   feeling: "good",
    // },
    // {
    //   id: 4,
    //   sessionDate: new Date(),
    //   place: "간디룸",
    //   sessionName: "기초 요가",
    //   companyName: "자메이카 요가 필라테스 센터",
    //   imgSrc: "4",
    //   diaryText: "요가요가",
    //   feeling: "good",
    // },
    // {
    //   id: 5,
    //   sessionDate: new Date(),
    //   place: "간디룸",
    //   sessionName: "기초 요가",
    //   companyName: "자메이카 요가 필라테스 센터",
    //   imgSrc: "5",
    //   diaryText: "요가요가",
    //   feeling: "good",
    // },
    // {
    //   id: 6,
    //   sessionDate: new Date(),
    //   place: "간디룸",
    //   sessionName: "기초 요가",
    //   companyName: "자메이카 요가 필라테스 센터",
    //   imgSrc: "6",
    //   diaryText: "요가요가",
    //   feeling: "good",
    // },
  ]);
  const globalModal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const printDay = (props) => {
    switch (props) {
      case 1:
        return "월";
      case 2:
        return "화";
      case 3:
        return "수";
      case 4:
        return "목";
      case 5:
        return "금";
      case 6:
        return "토";
      case 0:
        return "일";
      default:
        return "";
    }
  };
  const loadMore = () => {};
  const openModal = () => {
    dispatch(openDiaryModal());
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom color="primary">
        오늘의 수련일기
      </Typography>
      <Typography variant="" gutterBottom color="">
        {/* {new Date().getFullYear()}년 {new Date().getMonth() + 1}월{" "} */}
        {/* {new Date().getDate()}일, {printDay(new Date().getDay())}요일 */}
      </Typography>
      <p
        className="msg-box"
        style={{
          background: "rgba(0,0,0,0.05)",
          borderRadius: "5px",
          color: "#333",
          padding: "0 1rem",
          lineHeight: "3rem",
          fontSize: "1rem",
          textIndent: "0px",
        }}
      >
        오늘 수련은 어떠셨나요?
        <img src="./yogayo_logo.svg" style={{ width: "40px" }} alt="logo" />
      </p>
      <Typography variant="" gutterBottom color="">
        오늘 작성 가능한 일기
        <br />
        (수련일기는 수련 후 24시간 이내에만 작성가능합니다.)
      </Typography>

      <br />
      <br />
      <Grid container spacing={3}>
        {pendingContents.map((content) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={content.id}>
            <div onClick={openModal}>
              {/* <DiaryCard content={content} /> */}
            </div>
          </Grid>
        ))}
      </Grid>
      <br />
      <br />
      <Typography variant="h4" gutterBottom color="primary">
        오늘의 요기 피드
      </Typography>
      <br />
      <br />
      <br />
      <Grid container spacing={3}>
        {contents.map((content) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={content.id}>
            <DiaryCard content={content} />
          </Grid>
        ))}
      </Grid>
      <Button
        onClick={loadMore}
        variant="outlined"
        color="primary"
        size="large"
        style={{
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "1rem",
        }}
      >
        더 보기
      </Button>
      <DiaryModal></DiaryModal>
    </div>
  );
};

export default Diary;
