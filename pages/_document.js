import { Head, Html, Main, NextScript } from "next/document"

// You shouldn't need to touch this file, unless you have specific reasons to
// modify the HTML outside of our app. What we have here is just the Next.js default
// If we deleted this file the app will work identically
export default function Document() {
  return (
    <Html>
      <Head />
      <body style={{ 
      backgroundImage: `url("https://cdn.nba.com/manage/2021/10/GettyImages-1228132003.png")`
    }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}