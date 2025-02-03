import { FC } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import classes from './style.module.css';

const Filtering: FC = () =>{
    return (
        <Box 
        className = {classes.FilterBox}
        sx = {{ 
            flexDirection: { xs: "column", sm: "row" },
            alignItems: {xs: "start", sm: "center"}, 
            gap: {xs: 4},
        }}>
            <TextField
                label="Search Patient..."
                variant="outlined"
                className = {classes.Input}
            />
            <FormControl>
                <InputLabel
                    variant="outlined"
                >
                    Status
                </InputLabel>
                <Select
                    className = {classes.Input}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Confirmed">Confirmed</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default Filtering;