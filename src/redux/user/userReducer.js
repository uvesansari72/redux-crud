import userType from "./type";
import { toast } from "react-toastify";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userType.USER_LIST_REQUEST:
      return { ...state, loading: true, users: [] };

    case userType.USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case userType.USER_LIST_FAIL:
      toast.error(action.payload.message);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case userType.USER_CREATE_REQUEST:
      return { ...state, loading: true };

    case userType.USER_CREATE_SUCCESS:
      toast.success(action.payload);
      return { ...state, loading: false };

    case userType.USER_CREATE_FAIL:
      toast.error(action.payload);
      return { ...state, loading: false };

    case userType.USER_UPDATE_REQUEST:
      return { ...state, loading: true };

    case userType.USER_UPDATE_SUCCESS:
      toast.success(action.payload);
      return { ...state, loading: false };

    case userType.USER_UPDATE_FAIL:
      toast.error(action.payload);
      return { ...state, loading: false };

    case userType.USER_DELETE_REQUEST:
      return { ...state, loading: true };

    case userType.USER_DELETE_SUCCESS:
      toast.success(action.payload);
      return { ...state, loading: false };

    case userType.USER_DELETE_FAIL:
      toast.error(action.payload);
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default userReducer;
