import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalContextProvider } from '../context/Context'
import { ThemeProvider } from '@/components/theme-provider'
import Provider from '@/utils/providers'
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wisk',
  description: 'Make Anything, Anytime, with Anyone',
}
const queryClient = new QueryClient()

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
