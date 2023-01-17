let defaultState = {
  selectedItems: {items: [], resturentName: ''},
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = {...state};
      if (action.payload.checkBoxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          resturentName: action.payload.resturentName,
        };
      } else {
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              item => item.title !== action.payload.title,
            ),
          ],
          resturentName: action.payload.resturentName,
        };
      }
      console.log(newState);
      return newState;
    }

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default cartReducer;
