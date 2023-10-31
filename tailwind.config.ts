import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // 테마에 그냥 넣으면 기존 스타일 바꿈
    // 기존 스타일에 추가하는 것
    extend: {
      colors: {
        primary: 'red',
        secondary: 'var(--color-secondary)',
        backgroundColor: 'var(--color-background)',
        text: 'var(--color-text)',
      },
      backgroundImage:{
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
