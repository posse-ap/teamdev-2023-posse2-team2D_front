import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SelectBar from '../../components/SelectBar';

const KnowledgeTransactionList = () => {
  return(
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <h1>ナレッジ取引一覧</h1>
        <SelectBar
          option1="貸し出したナレッジ"
          option2="借りているナレッジ"
          component1="貸し出したナレッジの一覧"
          component2="借りているナレッジの一覧"
        />
      </Container>
    </React.Fragment>
  );
}

export default KnowledgeTransactionList;