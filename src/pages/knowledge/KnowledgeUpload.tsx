import React, {useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FullWidthTextField from "../../components/FullWidthTextField";
import Button from "@mui/material/Button";
import { useSnackbar } from "../../components/snackbar/Snackbar";

// フロント部分
export default function KnowledgeUpload() {
  const { showSnackbar } = useSnackbar();
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          padding: "10px",
        }}
      >
        <h2>ナレッジ共有会開催</h2>
        <FullWidthTextField label="勉強会名" helperText="/20" />
        <FullWidthTextField label="商品画像(任意)" helperText="ここにファイルをドラッグアンドドロップするかクリックしファイルを選択してください" />
        <FullWidthTextField label="詳細" rows={4} helperText="勉強会の詳細や、注意点などを記載して下さい。" />
        <Button
        variant="contained"
        // key={item.id}
        onClick={(event) => {
          event.preventDefault();
          classToggle();
          showSnackbar('登録が完了しました！', 'success');}}
        >
        開催</Button>
      </Container>
    </React.Fragment>
  );
}

// 見た目部分
