import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from '@/styles/Contact.module.css'


const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div>
          <h1>Contact</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
