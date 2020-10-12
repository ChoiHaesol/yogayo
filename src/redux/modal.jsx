const MODAL_OPEN = "MODAL_OPEN";
const MODAL_CLOSE = "MODAL_CLOSE";
const MODAL_NEXT = "MODAL_NEXT";
const MODAL_RESULT = "MODAL_RESULT";
const MODAL_DIARY_OPEN = "MODAL_DIARY_OPEN";
const MODAL_DIARY_CLOSE = "MODAL_DIARY_CLOSE";
const MODAL_CANCEL_OPEN = "MODAL_CANCEL_OPEN";
const MODAL_CANCEL_CLOSE = "MODAL_CANCEL_CLOSE";
const MODAL_CANCEL_NEXT = "MODAL_CANCEL_NEXT";

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
export const openDiaryModal = () => ({
  type: MODAL_DIARY_OPEN,
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

const initialState = {
  isBookingModalOpen: false,
  isBookingConfirmOpen: false,
  isBookingResultOpen: false,
  isDiaryModalOpen: false,
  isCancelModalOpen: false,
  isCancelResultOpen: false,
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
      };
    case MODAL_DIARY_OPEN:
      return {
        ...modalState,
        isDiaryModalOpen: true,
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
    default:
      return modalState;
  }
};
export default modal;
