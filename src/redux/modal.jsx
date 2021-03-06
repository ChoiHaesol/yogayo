const MODAL_OPEN = "MODAL_OPEN";
const MODAL_CLOSE = "MODAL_CLOSE";
const MODAL_NEXT = "MODAL_NEXT";
const MODAL_RESULT = "MODAL_RESULT";
const MODAL_DIARY_OPEN = "MODAL_DIARY_OPEN";
const MODAL_DIARY_CLOSE = "MODAL_DIARY_CLOSE";
const MODAL_CANCEL_OPEN = "MODAL_CANCEL_OPEN";
const MODAL_CANCEL_CLOSE = "MODAL_CANCEL_CLOSE";
const MODAL_CANCEL_NEXT = "MODAL_CANCEL_NEXT";
const LESSON_BOOKED = "LESSON_BOOKED";
const LESSON_FAILED = "LESSON_FAILED";
const MODAL_LOGOUT_OPEN = "MODAL_LOGOUT_OPEN";
const MODAL_LOGOUT_CLOSE = "MODAL_LOGOUT_CLOSE";
const MODAL_RESULT_OPEN = "MODAL_RESULT_OPEN";
const MODAL_RESULT_CLOSE = "MODAL_RESULT_CLOSE";
const MODAL_DELETE_OPEN = "MODAL_DELETE_OPEN";
const MODAL_DELETE_CLOSE = "MODAL_DELETE_CLOSE";
const MODAL_DELETE_NEXT = "MODAL_DELETE_NEXT";

export const openModal = () => ({
  type: MODAL_OPEN,
});
export const closeModal = () => ({
  type: MODAL_CLOSE,
});
export const nextModal = () => ({
  type: MODAL_NEXT,
});
export const showResult = () => ({
  type: MODAL_RESULT,
});
export const closeDiaryModal = () => ({
  type: MODAL_DIARY_CLOSE,
});
export const openDiaryModal = (content) => ({
  type: MODAL_DIARY_OPEN,
  diaryLesson : content
});
export const openCancelModal = () => ({
  type: MODAL_CANCEL_OPEN,
});
export const closeCancelModal = () => ({
  type: MODAL_CANCEL_CLOSE,
});
export const nextCancelModal = () => ({
  type: MODAL_CANCEL_NEXT,
});
export const setStateTrue = () => ({
  type: LESSON_BOOKED,
});
export const setStateFalse = () => ({
  type: LESSON_FAILED,
});
export const openLogoutModal = () => ({
  type: MODAL_LOGOUT_OPEN,
});
export const closeLogoutModal = () => ({
  type: MODAL_LOGOUT_CLOSE,
});
//일반(범용) 결과 표시 alert 모달 
export const openResultModal = () => ({
  type: MODAL_RESULT_OPEN,
});
export const closeResultModal = () => ({
  type: MODAL_RESULT_CLOSE,
});
export const openDeleteModal = () => ({
  type: MODAL_DELETE_OPEN,
});
export const closeDeleteModal = () => ({
  type: MODAL_DELETE_CLOSE,
});
export const nextDeleteModal = () => ({
  type: MODAL_DELETE_NEXT,
});

const initialState = {
  isBookingModalOpen: false,
  isBookingConfirmOpen: false,
  isBookingResultOpen: false,
  isDiaryModalOpen: false,
  isCancelModalOpen: false,
  isCancelResultOpen: false,
  isLogoutModalOpen: false,
  message: "",
  status: false,
  diaryLesson: "",
  isResultModalOpen:false,
  isDeleteModalOpen:false,
  isDeleteResultOpen:false,
};

const modal = (modalState = initialState, action) => {
  switch (action.type) {
    //modal 열기
    case MODAL_OPEN:
      return {
        ...modalState,
        isBookingModalOpen: true,
        isBookingConfirmOpen: false,
        isBookingResultOpen: false,
      };
    //modal 닫기
    case MODAL_CLOSE:
      return {
        ...modalState,
        isBookingModalOpen: false,
        isBookingConfirmOpen: false,
      };
    //modal body 교체(1->2단계)
    case MODAL_NEXT:
      return { ...modalState, isBookingConfirmOpen: true };
    //modal body 교체(2->3단계)
    case MODAL_RESULT:
      return {
        ...modalState,
        isBookingConfirmOpen: false,
        isBookingResultOpen: true,
      };
    case MODAL_DIARY_CLOSE:
      return {
        ...modalState,
        isDiaryModalOpen: false,
        diaryLesson: ''
      };
    case MODAL_DIARY_OPEN:
      return {
        ...modalState,
        isDiaryModalOpen: true,
        diaryLesson: action.diaryLesson
      };
    case MODAL_CANCEL_OPEN:
      return {
        ...modalState,
        isCancelModalOpen: true,
        isCancelResultOpen: false,
      };
    case MODAL_CANCEL_CLOSE:
      return {
        ...modalState,
        isCancelModalOpen: false,
        isCancelResultOpen: false,
      };
    case MODAL_CANCEL_NEXT:
      return {
        ...modalState,
        isCancelModalOpen: true,
        isCancelResultOpen: true,
      };
    case LESSON_BOOKED:
      return {
        ...modalState,
        message: "수강신청이 완료되었습니다.",
        status: true,
      };
    case LESSON_FAILED:
      return {
        ...modalState,
        message: "이미 수강신청하신 수업입니다.",
        status: false,
      };
    case MODAL_LOGOUT_OPEN:
      return {
        ...modalState,
        isLogoutModalOpen: true,
      };
    case MODAL_LOGOUT_CLOSE:
      return {
        ...modalState,
        isLogoutModalOpen: false,
      };
    case MODAL_RESULT_OPEN:
      return {
        ...modalState,
        isResultModalOpen: true,
      };
    case MODAL_RESULT_CLOSE:
      return {
        ...modalState,
        isResultModalOpen: false,
      };
    case MODAL_DELETE_OPEN:
      return {
        ...modalState,
        isDeleteModalOpen: true,
        isDeleteResultOpen: false,
      };
    case MODAL_DELETE_CLOSE:
      return {
        ...modalState,
        isDeleteModalOpen: false,
        isDeleteResultOpen: false,
      };
    case MODAL_DELETE_NEXT:
      return {
        ...modalState,
        isDeleteModalOpen: true,
        isDeleteResultOpen: true,
      };
    default:
      return modalState;
  }
};
export default modal;
