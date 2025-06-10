import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
    setEmail('');
    setPassword('');
  }

  return (
    // force it to top-left using inline style
    <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px' }}>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div>
          <label>Email:</label><br />
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
