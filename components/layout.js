import Footer from "./footer";
import Navbar from "./navbar";
import sort_sec from "./sort_sec";

// This is our base page layout - See it is used in pages_app.js
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <sort_sec />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  )
}