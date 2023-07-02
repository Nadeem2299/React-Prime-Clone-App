const galleryReducer = (state = [], action) => {
  switch (action.type) {
  case 'LIST_VIDEOS':
    return action.payload;
  default:
    return state;
  }
};

export default galleryReducer;
