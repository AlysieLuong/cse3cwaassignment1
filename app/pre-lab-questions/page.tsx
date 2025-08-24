/* imports reusable components*/
import Header from '../header';
import NavBar from '../navbar';
import Footer from '../footer';

/* defining pre-lab questions page*/
export default function PreLabQuestions() {
  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1><b><big>Pre-Lab Questions</big></b></h1>
        <p>This is currently a work in progress. 
          Please come back later for a future update </p>
      </main>
      <Footer />
    </div>
  );
}
