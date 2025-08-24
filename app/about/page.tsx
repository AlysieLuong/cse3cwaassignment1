import Header from '../header';
import NavBar from '../navbar';
import Footer from '../footer';
import HamburgerMenu from '../hamburgermenu';

export default function About() {
  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1>About</h1>
        <p>My name is Alysie Luong</p>
        <p>My student number is 21612368</p>
        <p>This is a video on how to use the video</p>
      </main>
      <Footer />
    </div>
  );
}