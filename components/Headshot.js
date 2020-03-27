import png from "../assets/images/headshot.png";

export default function Headshot() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px"
            }}
          >
            <img
              src={png}
              alt="Headshot"
              style={{ height: "250px", border: "5px solid black" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
