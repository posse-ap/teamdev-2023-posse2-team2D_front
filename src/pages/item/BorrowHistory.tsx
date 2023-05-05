import SimpleTabs from "../../components/SimpleTabs";
import Container from '@mui/material/Container';

const BorrowHistory = () => {
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
        labels={["借用中", "返却済"]}
        children={[
          <div>借用中</div>,
          <div>返却済</div>,
        ]}
      />
    </div>
  );
};

export default BorrowHistory;

