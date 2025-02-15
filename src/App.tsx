import "./App.css";
import Snackbar from "./component/snackbar/Snackbar";
import AppRoutes from "./routes/AppRoutes";
import { UserGender, UserRole } from "./types/user";

function App() {

  
  // Example usage:
  const newUser = {
    name: "John Doe",
    email: "johndoe1@example.com",
    password: "securepassword",
    confirmPassword: "securepassword",
    contact: "1234567890",
    role: "Patient", // Assuming "Doctor" is a valid UserRole excluding "Admin"
    specialty: "Cardiology",
    gender: "male",
    age: 35,
    illnessLocation: "Heart",
    report: "No major issues",
  };

  
  return (
    <>
      <AppRoutes />
      <Snackbar />
    </>
  );
}

export default App;
