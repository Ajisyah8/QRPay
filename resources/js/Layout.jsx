import Navbar from '../js/components/Navbar';
import Footer from '../js/components/Footer';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
