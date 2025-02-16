import React from "react";
import Typography  from "@mui/material/Typography";
import Box  from "@mui/material/Box";
import Container  from "@mui/material/Container";

const Footer: React.FC = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#176ABC",
                    color: "white",
                    padding: 4,
                    position: "relative",
                    bottom: 0,
                    width: "100%",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: {xs: 4, sm: 4},
                        justifyContent: "space-between",
                    }}
                >
                    <Box sx={{
                        display: "flex", 
                        flexDirection: "column", 
                        gap: 3, 
                        width: {xs: "100%", sm: "45%", md: "30%"},
                        }}>
                        <Typography variant="h6">About Us</Typography>
                        <Typography variant="body2">
                            Your health is our priority. We provide easy access to
                            professional medical care, allowing you to book appointments with
                            trusted doctors and receive quality treatment at your convenience.
                        </Typography>
                    </Box>
                    <Box sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: 3, 
                        width:{xs: "100%", sm: "45%", md: "30%"},
                        }}>
                        <Typography variant="h6">Clinic Hours</Typography>
                        <Typography variant="body2">
                            Monday - Friday: 9:00 AM - 5:00 PM
                        </Typography>
                        <Typography variant="body2">
                            Saturday: 10:00 AM - 2:00 PM
                        </Typography>
                    </Box>
                    <Box sx={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        gap: 3, 
                        width: {xs: "100%", sm: "45%", md: "30%"},
                        }}>
                        <Typography variant="h6">Patient Care</Typography>
                        <Typography variant="body2">
                            We are committed to providing a seamless healthcare experience.
                            Book appointments, receive timely medical attention, and stay
                            informed about your health.
                        </Typography>
                    </Box>
                    <Box
                        component="footer"
                        sx={{
                            backgroundColor: "#1A76D1",
                            color: "white",
                            textAlign: "center",
                            padding: 2,
                            width: "100%"
                        }}
                    >
                        <Typography variant="body2">© 2025 All Rights Reserved UseEffect team</Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
