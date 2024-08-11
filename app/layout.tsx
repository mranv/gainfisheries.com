import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gain Fisheries',
  description: 'Modern fish farming techniques and information',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
