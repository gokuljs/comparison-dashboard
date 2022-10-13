import { Grid, TableBody, TableCell, TableRow } from "@mui/material";
import React, { Dispatch } from "react";
import { DummyDatasetProps } from "../../../Pages/Dashboard/types";
import CircularProgressBar from "./components/circularProgessBar";
import { Table } from "./styles";
import CloseIcon from "@mui/icons-material/Close";

function TableCard({
  data,
  setDummyDataSet,
  dummyDataSet,
}: {
  data: DummyDatasetProps;
  dummyDataSet: DummyDatasetProps[];
  setDummyDataSet: Dispatch<DummyDatasetProps[]>;
}) {
  const deleteCompanyCard = (data: DummyDatasetProps) => {
    dummyDataSet.splice(
      dummyDataSet.findIndex((value) => value.id === data.id),
      1
    );
    setDummyDataSet([...dummyDataSet]);
  };
  return (
    <div>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell className="table-cell" align="center">
              <Grid item lg={12}>
                <Grid
                  item
                  display="flex"
                  justifyContent="flex-end"
                  align-item="center"
                >
                  <CloseIcon
                    className="closeIcon"
                    onClick={() => deleteCompanyCard(data)}
                  />
                </Grid>
                <Grid
                  item
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <img alt="company-logo" className="logo" src={data?.image} />
                  <Grid className="title">{data.title}</Grid>
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="table-cell progress-bar" align="center">
              <Grid
                item
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <CircularProgressBar value={data.overallScore} />
              </Grid>
            </TableCell>
          </TableRow>{" "}
          <TableRow>
            <TableCell className="table-cell" align="left">
              "hello
            </TableCell>
          </TableRow>{" "}
          <TableRow>
            <TableCell className="table-cell" align="left">
              "hello
            </TableCell>
          </TableRow>{" "}
          <TableRow>
            <TableCell className="table-cell" align="left">
              "hello
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default TableCard;