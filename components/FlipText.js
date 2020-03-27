import Flip from "react-reveal/Flip";

export default function FlipText({ text }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px"
            }}
          >
            <Flip left cascade>
              <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
                {text.word}
              </h1>
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
}
