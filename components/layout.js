import Footer from "./footer";
import Navbar from "./navbar";

// This is our base page layout - See it is used in pages_app.js
export default function Layout({ children }) {
  return (
    <div >
      <Navbar />
      <main className="container" style={{ 
      backgroundImage: `url("https://i.cbc.ca/1.5443354.1580238594!/fileImage/httpImage/bryant-logo.jpg")`
    }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}