import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        {/* header */}
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
        {/* left nav */}
        <aside className=" col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        {/* main content */}
        <section className="col-span-6">Main</section>
        {/* right content */}
        <aside className=" col-span-3">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
