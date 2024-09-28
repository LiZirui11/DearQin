// app/layout.jsx

import './styles.css';
import { Comforter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const comforter = Comforter({
  subsets: ['latin'],
  weight: '400'
})
export default function RootLayout({ children }) {
    return (
      <html lang="zh" className={comforter.className}>
        <body>
   
          {children}
        </body>
      </html>
    );
}
