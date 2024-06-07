import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { GlobalContextProvider } from '../context/Context'
import { ThemeProvider } from '@/components/theme-provider'
import Provider from '@/Providers/Providers'
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wisk- Make Anything, Anytime, with Anyone',
  description: 'Make Anything, Anytime, with Anyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <GlobalContextProvider>
            <Provider>{children}</Provider>
          </GlobalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
