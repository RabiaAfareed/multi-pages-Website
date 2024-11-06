import styles from './footer.module.css'

import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className={styles.footer} >
        <div className={styles.fashion}>
          <h1>Fashion.</h1>
          <p>SOCIAL MEDIA</p>
         <div className={styles.iconsDiv}>
         <CiFacebook size ={40} color='blue' />
          <FaTwitter size ={40} color ='black'/>
          <FaInstagramSquare size ={40} color = '#E1306c'/>
         </div>
        </div>
        <div className={styles.shopDiv}>
          <h1>SHOP</h1>
          <ul>
            <li>Product</li>
            <li>overReview</li>
            <li>Pricing</li>
            <li>Release</li>
          </ul>
        </div>

        <div className={styles.companyDiv}>
          <h1>COMPANY</h1>
          <ul>
            <li>About us</li>
            <li>contact</li>
            <li>News</li>
            <li>Support</li>
          </ul>
        </div>

        <div className={styles.submitDiv}>
          <h1>STAY UP TO DATE</h1>
          <div className={styles.inputDiv}>
            <input type="text" placeholder='Enter your email' className={styles.input} />
            <button >SUBMIT</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
