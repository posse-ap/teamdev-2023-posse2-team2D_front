import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SelectBar from "../../components/SelectBar";
import HeldHistory from "./HeldHistory";
import ParticipationHistory from "./ParticipationHistory";

const KnowledgeTransactionList = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Container
          sx={{
            textAlign: "center",
            padding: "10px",
          }}
        >
          <h1 style={{ fontSize: "24px", textAlign: "center" }}>
            知識共有一覧
          </h1>
        </Container>
        <SelectBar
          option1="開催者側"
          option2="参加者側"
          component1={<HeldHistory />}
          component2={<ParticipationHistory />}
        />
      </Container>
    </React.Fragment>
  );
};

export default KnowledgeTransactionList;
