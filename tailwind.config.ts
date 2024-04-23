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
            'faderigth': 'faderigth 3s ease-out ',
            'rotate-circle': 'rotateCircle 1s ease-out',
          },
          colors: {
            'purple': '#3f3cbb',
             'bg':'var(--bg)',
            "softTextColor":"var(--softTextColor)",
            'icons':"var(--icons)",
            "loginBg":"var(--loginBg)",
            "textColor":"var(--textColor)",
            "light-blue":"var(--light-blue)",
            "light-purple":"var(--light-purple)",
            "light-pink":"var(--light-pink)",
            "light-green":"var(--light-green)",
            "red-btn":"var(--red-btn)",
            "iconDisable": "var(--iconDisable)",
            "input-bg": "var(--input-bg)",
            "input-bg2": "var(--input-bg2)",
            "hlight-blue": "var(--hlight-blue)",
            "hlight-purple": "var(--hlight-purple)",
            "hlight-pink": "var(--hlight-pink)",
            "hlight-green": "var(--hlight-green)"
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
