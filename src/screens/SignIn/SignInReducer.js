import { SIGN_IN } from './SignInActions';

const initalState = {
  account: null,
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN: {
      return { account: payload };
    }
    default:
      return state;
  }
}
