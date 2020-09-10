import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import LoginComponent from './components/Login';
import RegisterComponent from './components/Register';
function App(){
return(
<div>
<Header></Header>
<h1>Welcome to Pega</h1>
<LoginComponent/>
<RegisterComponent/>
</div>
)
}
export default App

