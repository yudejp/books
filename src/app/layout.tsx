import './globals.css'

export const metadata = {
  title: '本棚',
  description: 'Managing my books',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="subpixel-antialiased mt-2">{children}</body>
    </html>
  )
}
