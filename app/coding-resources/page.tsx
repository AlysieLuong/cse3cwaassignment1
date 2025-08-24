/* imports reusable components*/
import Header from '../header';
import NavBar from '../navbar';
import Footer from '../footer';

/* defining coding resources page*/
export default function CodingResources() {
  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1><b><big>Coding Resources</big></b></h1>
        <p>This is currently a work in progress. 
          Please come back later for a future update </p>
      </main>
      <Footer />
    </div>
  );
}
