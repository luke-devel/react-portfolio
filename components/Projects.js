import SingleProject from "../components/SingleProject";
import SpotifyGenreMap from "../assets/images/SpotifyGenreMap.png";
import SpotifyArtistInfo from "../assets/images/SpotifyArtistInfo.png";

export default function Projects() {
  return (
    <div style={{ backgroundColor: "#343A40" }}>
      <div
        className="projectsDiv"
        style={{
          textAlign: "center",
          background: "gray",
          marginTop: "-16px",
          padding: "20px"
          // clipPath:
          //   "polygon(50% 0%, 100% 135px, 100% 100%, 50% 100%, 0 100%, 0 135px)"
        }}
      >
        <h1
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            marginTop: "20px"
          }}
        >
          Projects
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <SingleProject
                SingleProject={{
                  name: "Spotify Genre Map",
                  picture:
                    "/_next/static/images/SpotifyGenreMap-8546126bd252c2a8e4aba44d5602989a.png",
                  description:
                    "App to display Spotify monthly listener for all 3800 Spotify genres. This app uses an automated web-scraper using Puppeteer and node.js. The scraper pulled data from open.spotify.com to pupulate an MySQL database with Spotify Artists Genre info and listener info of the top 50 listening cities of the given artist's genre. This data is shown using Mapbox and GEOJSON data to populate a map with clusters varying in size dependant on the monthly listeners per genre.",
                  liveSite: "https://project-2-spotify.herokuapp.com/",
                  githubRepo: "https://github.com/luke-ols0/project-2-spotify",
                  height: "250px"
                }}
              />
            </div>

            <div className="col-6">
              <SingleProject
                SingleProject={{
                  name: "Spotify Artist Info",
                  picture:
                    "/_next/static/images/SpotifyArtistInfo-1e8b8d0d016ada34ef3093e3ba976399.png",
                  description:
                    "App uses next.js and React to allow a user to search a Spotify artist by URL, URI, or ID. Puppeteer is used on serverside next.js to scrape the Artist information and display it for the user using React as the frontend framework.",
                  liveSite: "https://spotify-artist-info.herokuapp.com/",
                  githubRepo: "https://github.com/luke-ols0/nextjs-spotify-id",
                  height: "250px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
