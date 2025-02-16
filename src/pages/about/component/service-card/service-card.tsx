import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IProps {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

const ServiceCard: React.FC<IProps> = (props: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        width: {xs:"100%",sm:"45%",md:"28%" },
      }}
    >
      <Box
        sx={{
          width: 75,
          height: 75,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: "white",
          transition: "0.3s",
          border: "2px solid #1A76D1",
          padding: "4px",
          "&:hover": {
            backgroundColor: "#1A76D1",
          },
          "&:hover svg": {
            color: "white",
          },
          svg: {
            color: "#1A76D1",
          },
        }}
      >
        {props.icon}{" "}
      </Box>
      <Typography variant="h6" fontWeight="bold" mt={1}>
        {props.title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {props.description}
      </Typography>
    </Box>
  );
};

export default ServiceCard;