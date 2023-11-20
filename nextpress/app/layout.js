import { Inter } from 'next/font/google'
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nexpress',
  description: "Nextpress is a basic blog application portal allowing the user to perform these navigations: - List of the authors - Paginations - Author details - Post details - View the visited pages - View the recent news",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  )
}
