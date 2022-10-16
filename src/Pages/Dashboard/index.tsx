import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import TableCard from "../../Components/cards/TableCard";
import { DashboardWrapper, DifferentCriteria } from "./styles";
import { CriteriaType, DummyDatasetProps } from "./types";
import { dummyDataset as dummyData } from "./utils";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import useOutsideClick from "../../hooks/clickAway/useClickAway";
import DialogModal from "../../Components/Modal";

function Dashboard() {
  const ref = useRef(null);
  const [dummyDataSet, setDummyDataSet] =
    useState<DummyDatasetProps[]>(dummyData);
  const [showDetailedFundingHistory, setShowDetailedFundingHistory] =
    useState<boolean>(false);
  const [showCriteria, setShowCriteria] = useState(false);
  const [chooseCriteria, setChooseCriteria] = useState<CriteriaType>(
    CriteriaType.DEFAULT
  );
  const [addNewVendor, setNewVendor] = useState<boolean>(false);
  useOutsideClick(ref, () => {
    setShowCriteria(false);
  });

  return (
    <DashboardWrapper>
      <div className="add-criteria">
        <div ref={ref} className="add-criteria-text">
          <Grid
            display="flex"
            alignItems="center"
            onClick={() => {
              setShowCriteria(!showCriteria);
            }}
          >
            Add criteria{" "}
            {showCriteria ? (
              <ArrowDropUpTwoToneIcon />
            ) : (
              <ArrowDropDownTwoToneIcon />
            )}
          </Grid>
          <DifferentCriteria showCriteria={showCriteria}>
            <Grid
              className="criteria-list"
              onClick={() => setChooseCriteria(CriteriaType.COMPANY_INFO)}
            >
              Company Info
            </Grid>
            <Grid
              className="criteria-list"
              onClick={() => setChooseCriteria(CriteriaType.FEATURES)}
            >
              Features
            </Grid>
            <Grid
              className="criteria-list"
              onClick={() =>
                setChooseCriteria(CriteriaType.CUSTOMER_CASE_STUDIES)
              }
            >
              Customer Cases Studies
            </Grid>
          </DifferentCriteria>
        </div>
      </div>
      <Grid display="flex" flexWrap="nowrap">
        {Array.isArray(dummyDataSet) &&
          dummyDataSet.map((value, index) => (
            <TableCard
              data={value}
              dummyDataSet={dummyDataSet}
              setDummyDataSet={setDummyDataSet}
              setShowDetailedFundingHistory={setShowDetailedFundingHistory}
              showDetailedFundingHistory={showDetailedFundingHistory}
              chooseCriteria={chooseCriteria}
              setChooseCriteria={setChooseCriteria}
              index={index}
              setNewVendor={setNewVendor}
            />
          ))}
      </Grid>
      <DialogModal
        open={addNewVendor}
        handleClose={() => {
          setNewVendor(false);
        }}
        dummyDataSet={dummyDataSet}
        setDummyDataSet={setDummyDataSet}
      />
    </DashboardWrapper>
  );
}

export default Dashboard;
