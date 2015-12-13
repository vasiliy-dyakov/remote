import { omit } from 'lodash';

var initialState = {
    ids: [1],
    byId: {
        1: {
            id: 1,
            text: 'Сделать фреймворк'
        }
    }
};

export default function todoList(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            var newId = state.ids[state.ids.length - 1] + 1;
            return {
                ...state,
                ids: state.todos.concat(newId),
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
