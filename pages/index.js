import Navbar from "../components/navbar";
import FlipText from "../components/FlipText";
import Footer from "../components/Footer";
import Headshot from "../components/Headshot";
import QuickLinks from "../components/QuickLinks";
import Projects from "../components/Projects";

export default function Index() {
  return (
    <>
      <Navbar />
      {/* #343A40 */}
      <div style={{ background: "#343A40" }}>
        <header
          style={{
            padding: "1em",
            background: "gray",
            marginBottom: "1em",
            paddingBottom: "3.5em",
            textAlign: "center",
            clipPath:
              "polygon(50% 0%, 100% 0px, 100% 65%, 50% 100%, 0 65%, 0 0)"
          }}
        >
          <Headshot />
          <FlipText text={{ word: "Luke Olson" }} />
          <p style={{ fontSize: "25px" }}>
            HTML/CSS | Bootstrap | JavaScript, C++, Java | NodeJS | React |
            Next.js | MySQL | Sequelize
          </p>
          <QuickLinks />
        </header>
      </div>
      {/* <div
        style={{ height: "18px", backgroundColor: "black", marginTop: "-17px" }}
      ></div> */}
      <Projects />
      <Footer />
    </>
  );
}
