import { OPEN_NOTIF_SUCCESS, NEW_NOTIF, GET_NOTIF_SUCCESS, DEL_NOTIF_SUCCESS, DEL_NOTIF } from '../actions/notifAction';
import { RESET_NOTIF_STATE } from '../actions/resetStateAction';

const DEFAULT_STATE = {
    current_notif: '',
    notifications: [],
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case RESET_NOTIF_STATE:
            return { current_notif: '', notifications: [...state.notifications] };
        case OPEN_NOTIF_SUCCESS:
            {
                let arr = [...state.notifications];
                arr.forEach(e => {
                    if (e.seen === 0)
                        e.seen = 1;
                });
                return { current_notif: '', notifications: arr };
            }
        case NEW_NOTIF:
            {
                let ele = { by: action.data.by, content: action.data.content, seen: 0 };
                let arr = [...state.notifications];
                arr.unshift(ele);
                return { current_notif: action.data.content, notifications: arr };
            }
        case GET_NOTIF_SUCCESS:
            return { current_notif: '', notifications: action.notif };
        case DEL_NOTIF: {
            let arr = [...state.notifications];
            return { current_notif: '', notifications: arr };
        }
        case DEL_NOTIF_SUCCESS:
            let arr = [...state.notifications];
            for (var i = 0; i < arr.length; i++) {
                  if (arr[i].by.id === action.notif) {
                    arr.splice(i, 1);
                    i--;
                  }
                }
            return { current_notif: '', notifications: arr };
        default:
            return state;
    }
}
