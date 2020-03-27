export default function QuickLinks() {
  let socialLinks = {
    justifyContent: "space-between",
    width: "50%",
    margin: "auto"
  };

  // let iTag = { color: "#343A40", fontSize: "5em", padding: "10px" };
  let iTag = { color: "black", fontSize: "5em", padding: "10px" };

  return (
    <>
      <div className="social-links" style={socialLinks}>
        {/* Github */}
        <a
          href="https://github.com/luke-ols0"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fab fa-github-square" style={iTag}></i>
        </a>

        {/* Linkdin */}
        <a
          href="https://www.linkedin.com/in/luke-olson-98005a191/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fab fa-linkedin" style={iTag}></i>
        </a>
      </div>
    </>
  );
}
