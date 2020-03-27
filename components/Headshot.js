import png from "../assets/images/headshot.png";

export default function Headshot() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div
            class="col-12"
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
