module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Rajdhani']
    },
    extend: {
      colors: {
        customWhite: '#fff',
        customBody: '#f2f3f5',
        customGrayLine: '#dcdde0',
        customText: '#666666',
        customTextHighlight: '#b3b9ff',
        customTitle: '#2e384d',
        customRed: '#e83f5b',
        customGreen: '#4cd62b',
        customBlue: '#5965e0',
        customBlueDark: '#4953b8',
        customBlueTwitter: '#2aa9e0'
      }
    }
  },
  plugins: []
}
