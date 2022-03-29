import Auth from "./Auth";
import "./background.css";
import Header from "./Header";
function background() {
  return (
    <main style={{}}>
      <Header />
      <div style={{ background: "#4e54c8", paddingTop: "100px" }}></div>
      <Auth />

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  );
}

export default background;
