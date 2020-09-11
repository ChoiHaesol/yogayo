import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Cookies } from "react-cookie";
import DiaryCard from "../components/DiaryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import BoardCard from "../components/BoardCard";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  visual: {
    background: "pink",
    position: "fixed",
    left: 0,
    right: 0,
    top: "56px",
    minHeight: "7rem",
    padding: "1rem",
    boxShadow: "1px 1px 6px rgba(0,0,0,0.2)",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    color: "#fff",
    fontSize: "2rem",
    textAlign: "center",
  },
  swiper: {
    marginBottom: "2rem",
    padding: "1rem 0",
  },
  heroContent: {
    marginTop: "7rem",
    padding: theme.spacing(2, 0, 6),
    "&>*": {
      backgroundColor: "#fff",
      padding: "2rem 3rem",
      borderRadius: "10px",
      boxShadow: "1px 2px 4px rgba(0,0,0,0.2)",
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  arrowLeft: {
    position: "absolute",
    left: "-5px",
  },
  arrowRight: {
    position: "absolute",
    right: "-5px",
  },
}));

const Main = (props) => {
  const loginMember = {
    name: "test1",
    email: "test1@gmail.com",
    password: "test1",
    mobile: "010-1111-1111",
    Voucher: {
      id: 1,
      center: "솔방울 요가원",
      VoucherName: "[특가] 6:1 3개월 24회 수강권",
      date: "2020.8.19 ~ 2020.10.19",
      attendance: "24회 중 1회 출석",
    },
  };
  const contents = [
    {
      id: 1,
      sessionDate: new Date(),
      place: "간디룸",
      sessionName: "기초 요가",
      companyName: "자메이카 요가 필라테스 센터",
      imgSrc: "1",
      diaryText:
        "비가 많이 내려서 그런 걸까요? 오늘따라 기상과 동시에 어찌나 뼈마디가 쑤시던지..😔 오랜만에 요가 매트 펼치고 #모닝요가 시원하게 했어요. 🧘‍♀️ 확실히 오랜만에 하니까 온 몸이 뻐근하고 아이고 아이고 소리가 절로 나와서 얼마나 민망하던지요 😅",
      feeling: "good",
    },
    {
      id: 2,
      sessionDate: new Date(),
      place: "간디룸",
      sessionName: "기초 요가",
      companyName: "자메이카 요가 필라테스 센터",
      imgSrc: "2",
      diaryText:
        "발도 떼지 못했던 작년... 수련은 거짓말을 하지않는다 심란한 이시국에 한발이든 두발이든 중심잡고 흔들리지 않게 서보자는 의미에서 이번달 주제는 #하체단련하기",
      feeling: "good",
    },
    {
      id: 3,
      sessionDate: new Date(),
      place: "간디룸",
      sessionName: "기초 요가",
      companyName: "자메이카 요가 필라테스 센터",
      imgSrc: "3",
      diaryText:
        "보이차하고 요가하고 🍵🙏🏻 꾸준함에 끈기, 행하고 보고 바로잡고 다시 시도하는 것. 두려움을 넘어야 그 희열이 찾아온다 - 요가로 하여금 늘 많은 것을 배운다. 요가를 더 오래 하고자 시작하여 호흡 몇번에 땀이 나고 온몸이 떨려오는 오늘도 완전호흡하는 수련자라 너무 좋은 요즘",
      feeling: "good",
    },
    {
      id: 4,
      sessionDate: new Date(),
      place: "간디룸",
      sessionName: "기초 요가",
      companyName: "자메이카 요가 필라테스 센터",
      imgSrc: "4",
      diaryText:
        "보이차하고 요가하고 🍵🙏🏻 꾸준함에 끈기, 행하고 보고 바로잡고 다시 시도하는 것. 두려움을 넘어야 그 희열이 찾아온다 - 요가로 하여금 늘 많은 것을 배운다. 요가를 더 오래 하고자 시작하여 호흡 몇번에 땀이 나고 온몸이 떨려오는 오늘도 완전호흡하는 수련자라 너무 좋은 요즘",
      feeling: "good",
    },
  ];

  const boardContents = [
    {
      id: 1,
      header: "중고장터",
      title: "수강권 양도 받으실분 있으신가요?",
      contents: "사정상 요가를 못나가게되어 양도합니다",
      writer: "최엉망진창",
      regiDate: "2020.8.31",
    },
    {
      id: 2,
      header: "요가",
      title: "간단한 요가동작을 소개합니다",
      contents:
        "타다아사나(산자세) : 타다 Tada는 산을 의미하고 아사나 Asana는 동작을 뜻해요! 타다아사나는 산처럼 곧바로 서 있는 자세를 뜻하며, 사마스티티(Samasthiti) 라고도 불립니다.",
      writer: "요가신",
      regiDate: "2020.8.31",
    },
    {
      id: 3,
      header: "필라테스",
      title: "필라테스 호흡이란?",
      contents:
        "코로 숨을 마시고 이으로 숨을 가늘고 길게 내뱉어야 합니다. 숨을 마실때 흉곽을 좌우로 늘였다가 내쉬는 호흡에 흉곽을 좁혀주신다고 생각하시면 됩니다.",
      writer: "필친놈",
      regiDate: "2020.8.31",
    },
    {
      id: 4,
      header: "같이 운동해요",
      title: "아메리카요가 군자점 같이 등록하실분 구해요!",
      contents:
        "현재 친구소개이벤트 중입니다! 친구 소개시 소개한 친구와 소개받은 친구 모두 횟수 추가 해준다고하니 관심있으신 분들 댓글 달아주세요👍",
      writer: "팔이피플",
      regiDate: "2020.8.31",
    },
  ];

  const classes = useStyles();

  const getLoggedInUser = () => {
    const cookies = new Cookies();
    const user = cookies.get("member");
    return user ? (typeof user == "object" ? user : JSON.parse(user)) : null;
  };

  const loginUser = getLoggedInUser();

  useEffect(() => {
    if (!loginUser) {
      props.history.push("/login");
    }
  });

  const onLogout = () => {
    const cookies = new Cookies();
    cookies.remove("member");
    props.history.push("/login");
  };
  const list = window.matchMedia("(min-width:960px)");
  const initialSlideNum = function () {
    if (list.matches === true) {
      return 3;
    } else {
      return 1;
    }
  };
  const [slidesPerView, setSlidesPerView] = useState(initialSlideNum);
  useEffect(() => {
    function handleResize() {
      if (list.matches === true) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* <div className={classes.visual}>
          핫챠 핫챠 운동을 하쟈
          <img src="./pose1.svg" alt="" />
          <img src="./pose2.svg" alt="" />
          <img src="./pose3.svg" alt="" />
        </div> */}
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              {loginUser ? loginUser.name : ""}님{/* {loginMember.name}님 */}
              <img
                src="./pose1.svg"
                alt="yoga pose"
                style={{ width: "40px", margin: "0 10px" }}
              />
            </Typography>
            <Typography align="center" color="textSecondary" paragraph>
              {loginMember.Voucher.center} <br />
              {loginMember.Voucher.VoucherName} <br />
              {loginMember.Voucher.date} <br />
              {loginMember.Voucher.attendance} <br />
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => props.history.push("/booking")}
                  >
                    수업 예약하기
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    name="logout"
                    onClick={onLogout}
                  >
                    로그아웃
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Typography variant="h5" color="" gutterBottom>
          요가요 피플 수련일기 구경하기
        </Typography>
        <Typography gutterBottom>오늘 올라온 요가 수련 일기들이에요</Typography>
        <Swiper
          spaceBetween={40}
          slidesPerView={slidesPerView}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {contents.map((content) => (
            <SwiperSlide className={classes.swiperSlide}>
              <DiaryCard content={content} />
            </SwiperSlide>
          ))}
        </Swiper>
        <br />
        <Typography variant="h5" color="primary" gutterBottom>
          요가요 피플 커뮤니티
        </Typography>
        <Typography gutterBottom>
          요가원 정보 공유/ 중고장터 / 같이 운동해요!
        </Typography>
        <Swiper
          spaceBetween={40}
          slidesPerView={slidesPerView}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className={classes.swiper}
        >
          {boardContents.map((content) => (
            <SwiperSlide>
              <BoardCard content={content} />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </React.Fragment>
  );
};

export default Main;
