import Header from "./components/Header";
import Footer from "./components/footer";

export default function HomeLayout({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
