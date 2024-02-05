import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="https://www.communitylab.com.mx/Logo.png" alt="Community LAB Logo" />
      </div>
      <div className="title">Regístrate</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre de Usuario"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Apellido"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group" style={{ position: 'relative' }}>
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="button" onClick={togglePasswordVisibility} className="toggle-password">👁️</button>
        </div>
        <div className="form-group" style={{ position: 'relative' }}>
          <input
            type={isConfirmPasswordVisible ? "text" : "password"}
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="button" onClick={toggleConfirmPasswordVisibility} className="toggle-password">👁️</button>
        </div>
        <div className="form-group">
          <input type="submit" value="Registro Cliente" />
        </div>
      </form>
      <div className="form-group">
        <Link to="/signin">¿Ya tienes cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
};

export default Signup;
