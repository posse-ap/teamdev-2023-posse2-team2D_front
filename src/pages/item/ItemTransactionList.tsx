import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SelectBar from '../../components/SelectBar';
import BorrowHistory from './BorrowHistory';
import LentHistory from './LentHistory';

const ItemTransactionList = () => {
  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Container
        sx={{
          textAlign: "center",
          padding: "10px",
        }}
        >
          <h1>商品取引一覧</h1>
        </Container>
        <SelectBar
          option1="貸し出した商品"
          option2="借りている商品"
          component1={<LentHistory />}
          component2={<BorrowHistory />}
        />
      </Container>
    </React.Fragment>
  );
}

export default ItemTransactionList;