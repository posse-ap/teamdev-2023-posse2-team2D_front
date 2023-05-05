import React from 'react';
import TransactionList from '../../components/TransactionList';
import Container from '@mui/material/Container';

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
      <TransactionList/>
    </div>
  );
};

export default LentHistory;