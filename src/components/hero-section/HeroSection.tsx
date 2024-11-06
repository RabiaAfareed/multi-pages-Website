import Image from 'next/image';
import styles from './HeroSection.module.css'
import { italiana,instrumentSans } from '@/font';



function HeroSection() {
  return (
    <div>
    <section className={styles.hero}>
    <div className= {styles.heroLeft}>
        <h1 className={italiana.className}>Discover And <br/> Find your <br />own  Fashion <br/> With Parizay</h1>
        <pre className={instrumentSans.className}>EXPLORE OUR CURTED COLLECTION OF <br />
             STYLISH CLOTHING AND aCCESSORIES <br /> 
            TRAILTED TO YOUR UNIQUE TASTE</pre>

            <button className={instrumentSans.className}>EXPLORE NOW</button>
    </div>

    <div className={styles.heroRight}>
      <div className={styles.heroRightImgBackground}>
       <Image src={"/pariImage/pari.png"} alt="picture" width={400} height={1200} ></Image>
      </div>
    </div>
    </section>
    </div>
  )
}

export default HeroSection