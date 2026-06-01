import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className="LoginSignup" >
      <div className="container">
        <h1>Sign Up</h1>
        <div className="loginSignup_fields">
          <input type="text" name="" value="" placeholder="Your name..."/>
          <input type="email" name="" value="" placeholder="Your email..."/>
          <input type="password" name="" value="" placeholder="Your password..."/>
        </div>
        <button>Continue</button>
        <p className="loginSignup_login">Already have an account? <span> Login </span></p>
        <div className="loginSignup_agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        
      </div>
    </div>
  )
}

export default LoginSignup
