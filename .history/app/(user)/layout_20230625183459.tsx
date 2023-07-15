import '../../styles/globals.css';
import '../../styles/main.scss';
import '../../styles/about.scss';
import '../../styles/faq.scss';
import '../../styles/team.scss';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import Footer from '../../components/HOME/Footer/footer';
import Navbar from '../../components/HOME/navbar/navbar';
// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

// import { config } from "@fortawesome/fontawesome-svg-core";
// // Tell Font Awesome to skip adding the CSS automatically 
// // since it's already imported above
// config.autoAddCss = false; 

export const metadata = {
  title: 'Treasure Trees || Investment Growth & Agribusiness',
  description: 'An Eco-restoration website for rebuilding and restoration',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html>
//       <head />

//       <body>

//         <Navbar/>
//         {children}
//         <Footer/>
        
//       </body>
//     </html>
//   )
// }
