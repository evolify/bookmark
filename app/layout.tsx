import { PropsWithChildren } from "react"
import { Analytics } from "@vercel/analytics/react"
import "common/styles/globals.css"

type Props = PropsWithChildren

export default function MyApp({ children }: Props) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export const revalidate = 60
