import React, {Component} from 'react';
export class RegisterComponent extends Component{
constructor(){
super();
}
render(){
return <div>
<h1>Register</h1>

<input type="text" placeholder="User Name" name="username" onChange={this.handleInputChange}/><br/>
<input type="text" placeholder="First Name" name="firstname" onChange={this.handleInputChange}/><br/>
<input type="text" placeholder="Last Name" name="lastname" onChange={this.handleInputChange}/><br/>
<input type="email" placeholder="Email ID" name="email" onChange={this.handleInputChange}/><br/>
<input type="number" placeholder="Age" name="age" onChange={this.handleInputChange}/><br/>
<input type="radio" name="gender" onChange={this.handleInputChange}/>
<label>Male </label>
<input type="radio" name="gender" onChange={this.handleInputChange}/>
<label>Female </label>
<input type="radio" name="gender" onChange={this.handleInputChange}/>
<label>Others</label><br/>
<input type="checkbox" name="agree" onChange={this.handleInputChange}/>
<label for="agree"> I agree to terms and conditions</label><br/><br/>
<input type="button" value="Register" name="Register" onChange={this.handleInputChange}/><br/>
</div>
}
}
export default RegisterComponent;