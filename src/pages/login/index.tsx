import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import styles from '@/styles/Login.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // Obtén el objeto router

  const handleLogin = () => {
    const correoIngresado = email;
    const contraseñaIngresada = password;
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isEmailValid = correoRegex.test(correoIngresado);
    const isPasswordValid = contraseñaIngresada.length >= 8;

    if (isEmailValid && isPasswordValid) {
      // Comprueba credenciales aquí (usuario y contraseña)
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');

      // Redirige a la página de inicio
      router.push('/');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.container}>
      {isLoggedIn ? (
        <div>
          <p>¡Has iniciado sesión!</p>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
