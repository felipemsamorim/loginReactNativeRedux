import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginAsync } from '../modules/loginReducer'
import Login from '../../../components/Login/login'

const mapActionCreators = {
  loginAsync
}

const mapStateToProps = (state) => ({
	loginToken: state.loginToken,
	isNotLoggedIn: state.isNotLoggedIn
})

export default connect(mapStateToProps, mapActionCreators)(Login)
