import "./App.css";
import Snackbar from "./component/snackbar/Snackbar";
import AppRoutes from "./routes/AppRoutes";
import { IUser, UserGender, UserRole } from "./types/user";

function App() {

  
  const addUserToLocalStorage = (user: IUser) => {
    // Retrieve existing users from local storage
    let users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
  
    // Add the new user to the array
    users.push(user);
  
    // Save the updated array back to local storage
    localStorage.setItem("users", JSON.stringify(users));
  };
  
  // Example user
  const newUser: IUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "securePass123",
    confirmPassword: "securePass123",
    contact: "123-456-7890",
    role: "Doctor",
    specialty: "Cardiology",
    gender: "male",
    age: 40,
    illnessLocation: "Heart",
    report: "No significant issues",
  };
  
  // Add user to local storage
  addUserToLocalStorage(newUser);
  
  return (
    <>
      <AppRoutes />
      <Snackbar />
    </>
  );
}

export default App;
