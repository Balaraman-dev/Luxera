/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        shad:'0 0 4px 4px rgb(229, 231, 238)',
      },
      backgroundColor:{
      search_background: '#FFE9E3',
      luxera:'#642A1A',
      light:'#FFE9E3',
      },
      placeholderColor:{
        search_text:'#AD573F',
        light:'#FFE9E3',
      },
      textColor:{
        luxera:'#642A1A',
        light:'#FFE9E3',
      },
      backgroundImage:{
        luxera:'#FFFFFF',
        light:'#FFE9E3',
      },
      animation: {
        fading: 'fadein 1.5s ease-in-out infinite', 
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' }
        },
      },
    },
  },
  plugins: [],
}

