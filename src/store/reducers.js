import routes from '../routes'
import session from '../routes/Login/modules/loginReducer'
let reducers = {};
reducers['session'] = session
routes.childRoutes.map((route)=>{
	reducers[route.reducer.name] = route.reducer;
});

export { reducers };
