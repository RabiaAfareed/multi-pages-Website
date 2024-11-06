import { Abhaya_Libre, Instrument_Sans, Italiana,ABeeZee, Inter } from 'next/font/google';

export const italiana = Italiana({
    weight: '400', // Italiana has only 400 weight available
    subsets: ['latin'],
    display: 'swap', // Choose subset based on your needs
  });

  export const instrumentSans = Instrument_Sans({
    weight: '400', // Italiana has only 400 weight available
    subsets: ['latin'],
    display: 'swap', // Choose subset based on your needs
  })
  export const abhayaLibre = Abhaya_Libre({
    weight: ['400', '500', '600', '700','800'], // Italiana has only 400 weight available
    subsets: ['latin'],
    display: 'swap', // Choose subset based on your needs
  })

  export const abeezee = ABeeZee({
    weight: '400', // Italiana has only 400 weight available
    subsets: ['latin'],
    display: 'swap', // Choose subset based on your needs
  })
  export const inter = Inter({
    weight: '400', // Italiana has only 400 weight available  
    subsets: ['latin'],
    display: 'swap', // Choose subset based on your needs
  })