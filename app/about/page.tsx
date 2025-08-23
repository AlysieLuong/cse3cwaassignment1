import Header from './header';
import NavBar from './navbar';
import Footer from './footer';
import HamburgerMenu from './hamburgermenu';

export default function Home() {
  return (
    <div>
      <Header>
        <HamburgerMenu />
      </Header>
      <Footer />
    </div>
  );
}