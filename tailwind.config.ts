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
         
          keyframes: {
            fadeIn:{
              '0%':{transform: 'translateX(10%)', opacity: '0'},
              '100%':{transform: 'translateX(0%)', opacity: '1'},
            },
            fadeOut:{
              '0%':{transform: 'translateY(0%)', opacity: '1'},
              '100%':{transform: 'translateX(10%)', opacity: '0'},
            },
            moveText:{
              '0%':{transform: 'translateX(0)'},
              '100%':{transform: 'translateX(-100%)'},
            },
            moveText2:{
              '0%':{transform: 'translateX(0)'},
              '100%':{transform: 'translateX(-100%)'},
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
            }
          ,
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
           }
         ,
            
          faderigth: {
              '0%': {  opacity: '0'},
              '50%': { opactiy: '0.5'},
              '100%': {  opactiy: '1'},
            },
            slideInLeft: {
              '0%': { transform: 'translateX(-100%)', opacity: '0' },
              '100%': { transform: 'translateX(0)', opacity: '1' },
            },
          },
          animation: {
            'progress': 'progress 3s ease-out',
            'progress2': 'progress2 2s ease-out 1s',
            'moveText': 'moveText 50s linear infinite',
            'moveText2': 'moveText2 6s linear infinite 1s',
            'fadeIn': 'fadeIn 2s ease-out',
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
            "green":"var(--green)",
            "purple":"var(--purple)",
            "red":"var(--red)",
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
