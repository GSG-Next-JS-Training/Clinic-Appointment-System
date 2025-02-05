import { FC } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import classes from './style.module.css';

const Filtering: FC = () =>{
    const APPOINTMENT_STATUS = {
        PENDING: "Pending",
        CONFIRMED: "Confirmed",
        COMPLETED: "Completed",
    };
    return (
        <Box 
        className = {classes.filterBox}
        sx = {{ 
            flexDirection: { xs: "column", sm: "row" },
            alignItems: {xs: "start", sm: "center"}, 
            gap: {xs: 4},
        }}>
            <TextField
                label="Search Patient..."
                variant="outlined"
                className = {classes.input}
            />
            <FormControl>
                <InputLabel variant="outlined">
                    Status
                </InputLabel>
                <Select className = {classes.input}>
                    <MenuItem value="All">All</MenuItem>
                    {
                    Object.values(APPOINTMENT_STATUS).map(status =>
                        <MenuItem value={status} key={status}>{status}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Filtering;