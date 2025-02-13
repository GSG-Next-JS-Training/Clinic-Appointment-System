import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
  return (
    <Typography
      sx={{
        fontSize: "h4.fontSize",
        fontWeight: "bold",
        m: 1,
        mt: 6,
        mb: 3,
        color: "#87BFF7",
        textAlign: "center",
      }}
    >
      Admin Panel - Add User
    </Typography>
  );
};
export default Header;