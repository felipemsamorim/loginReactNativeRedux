const SESSION_LOGIN_SUCCESS = 'SESSION_LOGIN_SUCCESS'
const SESSION_LOGIN_FAIL = 'SESSION_LOGIN_FAIL'

export const loginAsync = (loginObj) => {
   return async (dispatch, getState) => {
	   //simulação de usuário correto apenas para demonstração
     let loginToken = (loginObj.user === 'admin' && loginObj.password === '123456') ?
	 'valid' : 'invalid' 
      
     if(loginToken !== 'invalid') {
        dispatch(loginSuccess(loginToken))
     } else {
        dispatch(loginFail(loginToken))
     }
		return getState().login
   }
 }

export const loginSuccess = (value) => ({
  type: SESSION_LOGIN_SUCCESS,
  payload: value
})

export const loginFail = (value) => ({
    type: SESSION_LOGIN_FAIL,
    payload: value
})

const initialState = {
  isNotLoggedIn: true,
  loginToken: 'none'
}


export default function login(state = initialState , action) {
  switch (action.type) {
    case SESSION_LOGIN_SUCCESS:
	state.loginToken = action.payload
	state.isNotLoggedIn = false
	return Object.assign({}, state)
	case SESSION_LOGIN_FAIL:
	state.loginToken = action.payload
	state.isNotLoggedIn = true
	return Object.assign({}, state)
    default:
      return state
  }
}
