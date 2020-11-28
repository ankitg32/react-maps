
const initialState = {
    lat: 30.817261,
    lng: 75.171097
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_DEFAULT_LOCATION': return state;
        default: return state;
    }
}

export default rootReducer;