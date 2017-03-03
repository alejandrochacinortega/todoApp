import { FILTERING } from '../actions/index';

export default function(state = "showAll", action) {
    switch (action.type) {
        case FILTERING:
            return action.payload;
    }

    return state;
}