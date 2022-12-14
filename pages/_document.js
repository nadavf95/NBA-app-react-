import { Head, Html, Main, NextScript } from "next/document"

// You shouldn't need to touch this file, unless you have specific reasons to
// modify the HTML outside of our app. What we have here is just the Next.js default
// If we deleted this file the app will work identically
export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ 
      backgroundImage: `url("https://i.cbc.ca/1.5443354.1580238594!/fileImage/httpImage/bryant-logo.jpg")`
    }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}