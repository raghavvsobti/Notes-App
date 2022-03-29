import { createStore } from "redux";

const initialState = {
  modal: false,
  closeModal: true,
  editModal: false,
  closeEditModal: true,
};

const addBoxReducer = (state = initialState, action) => {
  if (action.type === "newNote") {
    return {
      modal: !state.modal,
      closeModal: !state.closeModal,
    };
  }

  if (action.type === "closeModal") {
    return {
      modal: !state.modal,
      closeModal: !state.closeModal,
    };
  }

  if (action.type === "editNote") {
    return {
      editModal: !state.editModal,
      closeEditModal: !state.closeEditModal,
    };
  }
  if (action.type === "closeEditModal") {
    return {
      editModal: !state.editModal,
      closeEditModal: !state.closeEditModal,
    };
  }

  return state;
};

const store = createStore(addBoxReducer);

export default store;
