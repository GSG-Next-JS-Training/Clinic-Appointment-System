import "./App.css";
import Snackbar from "./component/snackbar/Snackbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <AppRoutes />
      <Snackbar />
    </>
  );
}

export default App;
