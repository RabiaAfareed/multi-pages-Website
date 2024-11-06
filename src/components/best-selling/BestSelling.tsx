"use client"
import styles from './BestSelling.module.css'
import {abhayaLibre,instrumentSans,abeezee} from '@/font'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import{cardData} from "@/constant/card"
import { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'

function BestSelling() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay:
        
        2000,stopOnInteraction: false,stopOnMouseEnter: true})])
    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
  return (
    <div>
        <section className={styles.bestSelling}>
            <h1 className={abhayaLibre.className}>Best Selling</h1>
            <p className={instrumentSans.className}>Lorem ipsum dolor sit amet consectetur.</p>
            <div className={`${styles.cardSection}${styles.embla}`} ref={emblaRef}>
                <div className={styles.embla__container}>
                   {cardData.map((data)=>{return (
                     
                     <div className={styles.embla__slide} key={data.id}>

                     <div className={styles.imgDiv} style ={{backgroundColor:data.backgroundColor}}>
                         <Image src ={data.src} alt={"picture"} width={371} height={606}
                         className={styles.cardImage}></Image>
                     </div>

                     <div className={styles.cardText}>
                         <h1 className={abeezee.className}>{data.heading}</h1>

                        <div className={styles.priceDiv}>
                        <pre>{data.price} |{data.rating} <FaStar size={25} color='yellow' className=
                        {styles.star} /></pre>
                        </div>
                     </div>
                 </div>
                   )})}
                </div>
            </div>
            <button>See more</button>
        </section>
    </div>
  )
}

export default BestSelling
