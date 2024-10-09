import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p className="small"><a href="#">Forgot your password?</a></p>
                <p className="small">Don't have an account? <a href="#">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
