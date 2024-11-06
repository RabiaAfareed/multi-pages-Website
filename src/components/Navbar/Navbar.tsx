"use client";
import { TiThMenu } from "react-icons/ti";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);
  const showFunc = () => {
    setOpen(!open);
  };
  return (
   
    <>
    
      <nav className={styles.nav}>
        <h1>Fashion.</h1>
        <AnimatePresence>
        {open == true ? (
          
          <motion.div className={`${styles.linksDiv} ${styles.adjust}`}
          key={"menu"} 
          initial ={{height:0,opacity: 0}}
          animate={{height:"350px",opacity: 1}}
          transition={{duration: 0.3}}
          exit = {{height:0,opacity: 0}}>
            <ul>
              <li>
                <Link href="/" style={{ color: "#c04874", fontWeight: "600" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Contacts</Link>
              </li>
            </ul>
            <button>LOGIN</button>
          </motion.div>
          
        ) : (
          <div className={`${styles.linksDiv}`}>
            <ul>
              <li>
                <Link href="/" style={{ color: "#c04874", fontWeight: "600" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/">Shop</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Contacts</Link>
              </li>
            </ul>
            <button>LOGIN</button>
          </div>
        )}
        </AnimatePresence>
        <TiThMenu size={35} className={styles.menu} onClick={showFunc} />
      </nav>
    </>
  );
}

export default Navbar;
