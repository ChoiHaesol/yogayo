const INSERT_POST = "INSERT_POST";

export const insert = (post) => ({
  type: INSERT_POST,
  post,
});

const initialState = [
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

const posts = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_POST:
      return [...state, action.post];
    default:
      return state;
  }
};
export default posts;
