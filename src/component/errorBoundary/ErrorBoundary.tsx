import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Component, ErrorInfo, ReactNode } from "react";
import ErrorComponent from "../error-component";
import classes from "./style.module.css";

interface IProps{
    children: ReactNode;
}

interface IState{
    hasError: boolean;
    errorMessage: string;
}

class ErrorBoundary extends Component <IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state = {
            hasError: false, 
            errorMessage: "",
        };
    }

    static getDerivedStateFromError(error: Error): IState{
        return {
            hasError: true, 
            errorMessage: error.message,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo){
        console.error(`Error caught from Error Boundary:  ${error}, ${errorInfo}`);
    }

    handleRetry = () => {
        this.setState({
            hasError: false, 
            errorMessage: "",
        });
    }

    render(){
        if(this.state.hasError){
            return (
                <Box className ={`flexCenter ${classes.wrapper}`}>
                    <ErrorComponent 
                        imgPath="errorBoundary.gif" 
                        altText="Error Boundary" 
                    />
                    <Box className = {`${classes.content} flexCenter`}>
                        <Typography> Oops! Something went wrong 😢 </Typography>
                        <Typography> {this.state.errorMessage} </Typography>
                        <Button 
                        onClick={this.handleRetry} 
                        className = {classes.button}
                        sx = {{
                            border: "2px solid #87BFF7",
                            padding: "10px 15px",
                            borderRadius: "10px",
                            textTransform: "capitalize",
                            transition: "all 0.3s ease",
                        }}
                        >Please Try Again ..
                        </Button>
                    </Box>
                </Box>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;