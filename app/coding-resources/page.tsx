import Header from '../header';
import NavBar from '../navbar';
import Footer from '../footer';
import HamburgerMenu from '../hamburgermenu';

export default function CodingResources() {
  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1>Coding Resources</h1>
        <p>This is the Coding Resources page content. 
          It is still currently a work in progress. 
          Please come back later for a future update </p>
      </main>
      <Footer />
    </div>
  );
}
