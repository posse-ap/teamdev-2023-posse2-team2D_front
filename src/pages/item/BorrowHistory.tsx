import SimpleTabs from "../../components/SimpleTabs";
import Container from '@mui/material/Container';
import TransactionList from "../../components/TransactionList";

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
          <div><TransactionList/></div>,
          <div><TransactionList/></div>,
        ]}
      />
    </div>
  );
};

export default BorrowHistory;

