export default function SingleProject({ SingleProject }) {
  return (
    <>
      <div className="containter">
        <div className="row">
          <div className="col-12">
            <h1 style={{ fontWeight: "bold" }}>{SingleProject.name}</h1>
            <img
              src={SingleProject.picture}
              alt={SingleProject.name}
              style={{
                height: SingleProject.height,
                border: "5px solid black",
                marginTop: "10px"
              }}
            />
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-6">
          <a
            href={SingleProject.liveSite}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              class="fas fa-satellite-dish"
              style={{ color: "#000000", fontSize: "2em", padding: "10px" }}
            ></i>
          </a>

          <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>Live Site</h1>
        </div>

        <div className="col-6">
          <a
            href="https://github.com/luke-ols0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i
              class="fab fa-github"
              style={{ color: "#000000", fontSize: "2em", padding: "10px" }}
            ></i>
          </a>

          <h1 style={{ fontSize: "15px", fontWeight: "bold" }}>GitHub Repo</h1>
        </div>
      </div>

      <p style={{ marginTop: "10px", fontSize: "25px" }}>
        {SingleProject.description}
      </p>
    </>
  );
}
