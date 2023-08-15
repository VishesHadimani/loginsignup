import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
