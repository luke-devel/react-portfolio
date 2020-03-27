export default function Navbar() {
  let fontStyle = {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#000000",
    marginTop: "10px",
    padding: "10px",
    fontSize: "30px",
    marginBottom: "10px",
    fontWeight: "bold"
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark"
      style={{ margin: "auto" }}
    >
      <ul className="nav col-xs-4 navbar-nav mx-auto">
        <a className="nav-link" href="/" style={fontStyle}>
          Portfolio
        </a>
        <a className="nav-link" href="contact" style={fontStyle}>
          Contact
        </a>
      </ul>
    </nav>
  );
}
