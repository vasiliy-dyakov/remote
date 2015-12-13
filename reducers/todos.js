import { omit } from 'lodash';

export default function todoList(state = {}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            var newId = state.ids[state.ids.length - 1] + 1;
            return {
                ...state,
                ids: state.ids.concat(newId),
                byId: {
                    ...state.byId,
                    [newId]: {
                        id: newId,
                        text: action.text
                    }
                }
            };

        case 'DELETE_TODO':
            return {
                ...state,
                ids: state.ids.filter(id => id !== action.id),
                byId: omit(state.byId, action.id)
            };

        default:
            return state;
    }
}
