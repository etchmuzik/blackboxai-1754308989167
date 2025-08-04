import './globals.css'

export const metadata = {
  title: 'Suno | AI Music Generator',
  description: 'Make any song you can imagine with AI-powered music generation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
