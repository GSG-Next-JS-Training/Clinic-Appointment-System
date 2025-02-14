import { FC, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import classes from "./style.module.css";
import useGrid from "@clinic/hooks/useGrid";
import { useSearchParams } from "react-router-dom";
import { APPOINTMENT_STATUS } from "@clinic/constant.js";

const Filtering: FC = () => {
  const { state, setFilter } = useGrid();
  const [params, setParams] = useSearchParams();
  const [name, setName] = useState(params.get("name") || "");
  const [status, setStatus] = useState(params.get("status") || "All");

  useEffect(() => {
    setFilter({ filters: { name, status } });
    if (name.length) {
      params.set("name", name);
    } else {
      params.delete("name");
    }
    params.set("status", status);
    setParams(params);
  }, [state, name, status]);

  return (
    <Box
      className={classes.filterBox}
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "start", sm: "center" },
        gap: { xs: 4 },
      }}
    >
      <TextField
        label="Search Patient..."
        variant="outlined"
        className={classes.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3498db",
            },
          },
        }}
      />
      <FormControl
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#3498db",
            },
          },
        }}
      >
        <InputLabel variant="outlined">Status</InputLabel>
        <Select
          className={classes.input}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          {Object.values(APPOINTMENT_STATUS).map((status) => (
            <MenuItem value={status} key={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filtering;
