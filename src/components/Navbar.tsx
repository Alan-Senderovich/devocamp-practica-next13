import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario ha iniciado sesión en el almacenamiento local
    const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image className={styles.logoImage} src={"/logoipsum-298.svg"} alt='logo' width={50} height={50} />
      </div>
      <div className={styles.navItems}>
        <Link href="/">Inicio</Link>
        <Link href="/contact">Contacto</Link>
        {isLoggedIn ? (
          <button className={styles.closeSessionBtn} onClick={handleLogout}>Cerrar Sesión</button>
        ) : (
          <Link href="/login">Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
