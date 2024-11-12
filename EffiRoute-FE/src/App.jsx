import { BrowserRouter as Router } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useRef } from "react";
import AppContent from "./Components/Layout/AppContent";

function App() {
  const isLoading = useSelector((state) => state.account.isLoading);
  const firstRenderRef = useRef(true);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <>
      <Router>
        {isLoading ? (
          <div style={style}>
            <HashLoader color={"#fd7e14"} loading={true} size={150} />
          </div>
        ) : (
          <AppContent firstRenderRef={firstRenderRef} />
        )}
      </Router>
    </>
  );
}

export default App;
