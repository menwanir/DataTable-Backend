import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";

import {ButtonGroup} from "@mui/material";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Stack } from "@mui/material";

const columns = [
  { id: "firstName", label: "First Name", minWidth: 170 },
  { id: "lastName", label: "Last Name", minWidth: 170 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "age", label: "Age", align: "right", minWidth: 170 },
  { id: "number", label: "Number", align: "right", minWidth: 170 },
];

export default function DataTable({ fetchData }) {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const response = fetch(
        `http://localhost:8000/api?page=${page}&limit=${limit}`
      );
  
      const data = (await response).json();
      console.log(data);
    };
    getData();
  }, [page, limit]);

  
  const pageChangeHandler = () => {

    
  };

  const limitChangeHandler = () => {};


  return (
    <div style={{ width: "50%", margin: "auto", marginTop: "10%" }}>
      <h1>Employee Data</h1>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {fetchData.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Stack spacing={1}>
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
        >
         <Button onClick={pageChangeHandler} variant="outlined" startIcon={<ArrowBackIosNewIcon />}></Button>
         <Button variant="outlined" startIcon={<ArrowForwardIosIcon />}></Button>
        </ButtonGroup>
        
        
      </Stack>
    </div>
  );
}
