import SimpleTabs from "../../components/SimpleTabs";
import Container from '@mui/material/Container';
import TransactionList from "../../components/TransactionList";

const LentHistory = () => {
  return (
    <div>
      <Container
        sx={{
          textAlign: "right",
          padding: "10px",
        }}
        >
          <h2>月末獲得ポイント:{'値埋め込み'}</h2>
        </Container>
      <SimpleTabs
        labels={["出品中", "貸出中", "貸し出し申請中"]}
        children={[
          <div><TransactionList/></div>,
          <div><TransactionList/></div>,
          <div><TransactionList/></div>,
        ]}
      />
    </div>
  );
};

export default LentHistory;