const tailwindConfig = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        green: {
          dark: '#013638',
          light: '#afee00',
          
        },
        borderRadius:{
          'rounded-full': '9999px'
        }
       
      },
      fontFamily: {
        sans: ['Moderustic', 'sans-serif'],
      },
    },
  },
}

// Register the config for Tailwind CDN
tailwind.config = tailwindConfig

// Register the config for Tailwind Code Editor Plugin
export default tailwindConfig
