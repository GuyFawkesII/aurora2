import { SET_PREFE, SAMPLE_ERROR ,SET_SPLASH} from "../types";

const language = process.env.NEXT_PUBLIC_LANGUAGE
// var pref = typeof window === 'undefined' ? null : JSON.parse(localStorage.getItem("currency"));

const initialState = {
    currency: {
      index : language=='es' ? 1 : 2,
      name : language=='es' ? "EUR" : "POUND",
      symbol : language=="es" ? "€" :"£"
    },
    splash : {
      backImage : "/background.png",
      TypeEffectText : "",
    },
    generalSettings : {
      isMobileView : null
    }
};

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREFE:
      return {
        ...state,
        currency : action.payload,
    };
    case SET_SPLASH:
      return {
        ...state,
        splash : action.payload,
    };
    case SAMPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
    };
    default:
      return state;
  }
};

export default preferences;
