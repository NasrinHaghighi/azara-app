import type { Config } from "tailwindcss";
//const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
   
        extend: {
          backgroundImage: {
            'blue-gradient': 'linear-gradient(109.6deg, rgba(204, 239, 235, 0.8) 11.2%, rgba(89, 175, 181, 0.8) 91.1%)',
          },
          boxShadow: {
            'box-shadow': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
          },

          keyframes: {
            fadeIn:{
              '0%':{transform: 'translateX(10%)', opacity: '0'},
              
              '100%':{transform: 'translateX(0%)', opacity: '1'},
            },
            fadeOut:{
              '0%':{transform: 'translateY(0%)', opacity: '1'},
              '100%':{transform: 'translateX(10%)', opacity: '0'},
            },
            marquee: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(-100%)' },
            },
            marquee2: {
              '0%': { transform: 'translateX(0%)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            progress: {
             ' 0%': {
                left:' 0',
                width: '0',
                opacity: '0',
                
              },
              '50%': {
                left:' 0',
                width: '100%',
                opacity: '1',
              },
              '100%': {
                left: '100%',
                width: '0%',
               opacity:'0'
              }
            },
          progress2: {
            ' 0%': {
               left:' 0',
               width: '0',
               opacity: '1',
               
             },
             '50%': {
               left:' 0',
               width: '100%',
               opacity: '1',
             },
             '100%': {
               left: '100%',
               width: '0',
              opacity:'0'
             }
           },
        //  shake: {
        //  ' 10%': { transform: 'translateX(10px)' },
        //  ' 90%': { transform: 'translateX(10px)' },
        //    '20%': { transform: 'translateX(-10px)' },
        //    '80%': { transform: 'translateX(-10px)' },
        //   },
          faderigth: {
              '0%': {  opacity: '0'},
              '50%': { opacity: '0.5'},
              '100%': {  opacity: '1'},
            },
            slideInLeft: {
              '0%': { transform: 'translateX(-100%)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' },
            },
          },
          animation: {
            'progress': 'progress 3s ease-out',
            'progress2': 'progress2 2s ease-out 1s',
           'marquee': 'marquee 3s  infinite linear',
           'marquee2': 'marquee 3s  infinite linear 2s',
            'fadeIn': 'fadeIn 2s ease-out',
            // 'shake':'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
            'fadeOut': 'fadeOut 2s ease-out',
            'faderigth': 'faderigth 3s ease-out ',
            'rotate-circle': 'rotateCircle 1s ease-out',
          },
          colors: {
            
             'bg':'var(--bg)',
            "text":"var(--text)",
            'ligthText':"var(--ligthText)",
            "white":"var(--white)",
            "orangecolor":"var(--orangecolor)",
            "greencolor":"var(--greencolor)",
            "greenBg":"var(--greenBg)",
            "purple":"var(--purple)",
            "redcolor":"var(--redcolor)",
            "pink": "var(--pink)",
            "darkPink": "var(--darkPink)",
            "shadowBax": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
          },
          screens: {
            'xxs':'320px',
            'xs': '480px',
            'sm': '640px',
           'md': '768px',
            'lg': '1024px',
           'xl': '1280px',
              '2xl': '1536px',
                }
    },
  },
  safelist: ['animate-[slide-right_1s_ease-in-out]', 'animate-[slide-right_1s_ease-in-out]'],
  plugins: [],
};
export default config;
