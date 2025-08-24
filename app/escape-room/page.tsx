import Header from '../header';
import NavBar from '../navbar';
import Footer from '../footer';
import HamburgerMenu from '../hamburgermenu';

export default function EscapeRoom() {
  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1>Escape Room</h1>
        <p>This is the Escape Room page content.
          It is still currently a work in progress. 
          Please come back later for a future update </p>
      </main>
      <Footer />
    </div>
  );
}