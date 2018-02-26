

const initialState = {

    list : []
};

const HotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_LIST":
            return Object.assign({}, state,  action.data);
        default:
            return state;
    }
};

export default HotelsReducer;
