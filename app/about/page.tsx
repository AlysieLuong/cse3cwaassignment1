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
        <h1><b><big>About</big></b></h1>
        <p>My name is Alysie Luong</p>
        <p>My student number is 21612368</p>
        <p>This is a video on explaining what features my website has and the codes used</p>

        /*about me video*/
        <video controls style={{marginTop: "1rem"}}>
          <source src="xxxxx" type="audio/mpeg"/>
        </video>
      </main>
      <Footer />
    </div>
  );
}