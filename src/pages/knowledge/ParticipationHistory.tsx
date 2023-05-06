import SimpleTabs from "../../components/SimpleTabs";
import Container from '@mui/material/Container';

const ParticipationHistory = () => {
  return (
    <div>
      <Container
        sx={{
          textAlign: "right",
          padding: "10px",
        }}
        >
      <h2>今月の消費ポイント:{'値埋め込み'}</h2>
      </Container>
      <SimpleTabs
        labels={["予約中", "参加済"]}
        children={[
          <div></div>,
          <div></div>,
        ]}
      />
    </div>
  );
};

export default ParticipationHistory;