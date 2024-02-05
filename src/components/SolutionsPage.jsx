import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.css' 
const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [userName, setUserName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const toggleForms = () => setShowLogin(!showLogin)

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)

  const handleUserNameChange = (e) => setUserName(e.target.value)
  const handleLastNameChange = (e) => setLastName(e.target.value)
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value)
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)
  const handleTermsChange = (e) => setTermsAccepted(e.target.checked)

  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      userName: e.target.userName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
      termsAccepted: e.target.termsAccepted.checked,
    }
  
    try {
      const response = await fetch('https://your-api-url.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
  
      if (!response.ok) {
        throw new Error('Error en la solicitud de registro')
      }
  
      const data = await response.json()
      console.log('Registro exitoso:', data)
      // Redirige al usuario a la página de inicio de sesión o mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error en el registro:', error)
      // Muestra un mensaje de error al usuario
    }
  }
  return (
    <div className="container">
      <div className="logo">
        <img src="https://www.communitylab.com.mx/Logo.png" alt="Community LAB Logo" />
      </div>
      {showLogin ? (
        <div id="loginPanel">
          <div className="title">Iniciar Sesión</div>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className="form-group">
              <input type="submit" value="Iniciar Sesión" />
            </div>
            <div className="form-group">
              <Link to="/signup">¿No tienes cuenta? Regístrate</Link>
              <Link to="/reset-password">¿Olvidaste tu contraseña?</Link>
            </div>
          </form>
        </div>
      ) : (
        <div id="registerPanel">
          <div className="title">Registro de Cliente</div>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Nombre de Usuario" value={userName} onChange={handleUserNameChange} required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Apellido" value={lastName} onChange={handleLastNameChange} required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Número de Teléfono" value={phoneNumber} onChange={handlePhoneNumberChange} required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            </div>
            <div className="form-group">
              <label>
                <input type="checkbox" checked={termsAccepted} onChange={handleTermsChange} required />
                Acepto los Términos y Condiciones
              </label>
            </div>
            <div className="form-group">
              <input type="submit" value="Registrar" />
            </div>
          </form>
        </div>
      )}
      <button onClick={toggleForms}>
        {showLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
      </button>
    </div>
  )
}

export default LoginPage