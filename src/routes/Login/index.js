import LoginContainer from './containers/loginContainer'
import reducer from './modules/loginReducer'

export default {
  path: 'login',
  title: 'Login',
  component: LoginContainer,
  reducer: reducer
}
