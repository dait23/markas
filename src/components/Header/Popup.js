import React, { Component } from 'react';

class Popup extends Component {
  render() {
    return (

			<div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">

				<div className="small-dialog-header">
					<h3>Sign In</h3>
				</div>

				<div className="sign-in-form style-1">

					<ul className="tabs-nav">
						<li className=""><a href="#tab1">Log In</a></li>
						<li><a href="#tab2">Register</a></li>
					</ul>

					<div className="tabs-container alt">

						<div className="tab-content" id="tab1" style={{display: 'none'}} >
							<form method="post" className="login">

								<p className="form-row form-row-wide">
									<label>Username:
										<i className="im im-icon-Male"></i>
										<input type="text" className="input-text" name="username" id="username" value="" />
									</label>
								</p>

								<p className="form-row form-row-wide">
									<label>Password:
										<i className="im im-icon-Lock-2"></i>
										<input className="input-text" type="password" name="password" id="password"/>
									</label>
									<span className="lost_password">
										<a href="/forgot" >Lost Your Password?</a>
									</span>
								</p>

								<div className="form-row">
									<input type="submit" className="button border margin-top-5" name="login" value="Login" />
									<div className="checkboxes margin-top-10">
										<input id="remember-me" type="checkbox" name="check" />
										<label>Remember Me</label>
									</div>
								</div>
								
							</form>
						</div>

			
						<div className="tab-content" id="tab2" style={{display:'none'}}>

							<form method="post" className="register">
								
							<p className="form-row form-row-wide">
								<label>Username:
									<i className="im im-icon-Male"></i>
									<input type="text" className="input-text" name="username" id="username2" value="" />
								</label>
							</p>
								
							<p className="form-row form-row-wide">
								<label>Email Address:
									<i className="im im-icon-Mail"></i>
									<input type="text" className="input-text" name="email" id="email2" value="" />
								</label>
							</p>

							<p className="form-row form-row-wide">
								<label>Password:
									<i className="im im-icon-Lock-2"></i>
									<input className="input-text" type="password" name="password1" id="password1"/>
								</label>
							</p>

							<p className="form-row form-row-wide">
								<label>Repeat Password:
									<i className="im im-icon-Lock-2"></i>
									<input className="input-text" type="password" name="password2" id="password2"/>
								</label>
							</p>

							<input type="submit" className="button border fw margin-top-10" name="register" value="Register" />
	
							</form>
						</div>

					</div>
				</div>
			</div>
			
    );
  }
}

export default Popup;
