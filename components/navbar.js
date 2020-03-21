export default function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-dark"
      style={{ margin: "auto" }}
    >
      <ul class="nav navbar-nav navbar-right menu">
        <a class="nav-link" href="">
          About
        </a>
        <a class="nav-link" href="portfolio">
          Portfolio
        </a>
        <a class="nav-link" href="contact">
          Contact
        </a>
      </ul>
    </nav>

    /* <ul class="navbar-nav text ml-auto" style={{ margin: "auto" }}>
<li class="nav-item">
  <a class="nav-link" href="#">
    ABOUT
  </a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">
    PORTFOLIO
  </a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">
    CONTACT
  </a>
</li>
</ul> */
  );
}
