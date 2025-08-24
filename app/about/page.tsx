/* imports reusable components*/
import Header from '../header';
import NavBar from '../navbar';
import Footer from '../footer';

/* defining the about page*/
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

        {/* about website/code video*/}
        <video controls style={{ marginTop: "1rem", width: "100%", maxWidth: "600px" }}>
          <source src="/cse3cwassignment1video.mp4" type="video/mp4" />
        </video>
      </main>
      <Footer />
    </div>
  );
}