export default (state = '', action) => {
    switch (action.type) {
        case 'CHANGE_ROUTE':
            state = action.route;
            return state;
        default:
            return state;
    }
};
