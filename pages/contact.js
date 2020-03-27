import Navbar from "../components/Navbar";
import FlipText from "../components/FlipText";
import Footer from "../components/Footer";
import Headshot from "../components/Headshot";
import QuickLinks from "../components/QuickLinks";
import Projects from "../components/Projects";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#343A40" }}>
        <header
          style={{
            padding: "1em",
            background: "gray",
            marginBottom: "1em",
            paddingBottom: "3.5em",
            textAlign: "center",
            clipPath: "polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0)"
          }}
        >
          <div
            style={{
              backgroundColor: "#808080",
              textAlign: "center",
              fontWeight: "bold"
            }}
          >
            <div style={{ marginTop: "30px" }}>
              <FlipText text={{ word: "Contact Me" }} />
              <div className="col-12">
                <p style={{ marginTop: "20px", fontSize: "25px" }}>
                  I am currently avaliable to do remote work. Will respond
                  promptly to emails.{" "}
                </p>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div
        style={{ backgroundColor: "gray", marginTop: "-16px", height: "100vh" }}
      >
        <h2
          style={{
            marginTop: "10px",
            textAlign: "center",
            fontWeight: "bold",
            paddingTop: "30px"
          }}
        >
          Email: luke.olson499@gmail.com
        </h2>
      </div>

      <Footer />
    </>
  );
}
