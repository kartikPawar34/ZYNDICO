import { Link } from "react-router-dom";
import './authen.css';

function ForgotPassword() {
  return (
    <>
      <div className="form-container">
        <h1 className="headingauth"  style={{fontSize:"2rem"}}>Forgot password</h1>
        <form className="forminfo">
          <input type="email" placeholder="Enter Email" className="enterinfo" />
        </form>
        <Link to="/forgetpass"><p  style={{color:"#fff",marginTop:"15px",marginRight:"20px",fontSize:"15px",textAlign:"right"}}>Already have an account?</p></Link>
      </div>
    </>
  );
}

export default ForgotPassword;