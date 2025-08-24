import Header from '../header';
import NavBar from '../navbar';
import Footer from '../footer';

export default function PreLabQuestions() {
  return (
    <div>
      <Header />
      <NavBar />
      <main style={{ padding: "2rem" }}>
        <h1>Pre-Lab Questions</h1>
        <p>This is the Pre-Lab Questions page content.
          It is still currently a work in progress. 
          Please come back later for a future update </p>
      </main>
      <Footer />
    </div>
  );
}
