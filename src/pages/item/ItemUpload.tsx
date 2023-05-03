import React, {useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FullWidthTextField from "../../components/FullWidthTextField";
// import MultilineTextField from "../../components/MultilineTextField";
import Button from "@mui/material/Button";
import { useSnackbar } from "../../components/snackbar/Snackbar";

// フロント部分
export default function ItemUpload() {
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
        <h2>商品貸し出し</h2>
        <FullWidthTextField label="商品名" helperText="/40" />
        <FullWidthTextField label="商品画像(3枚まで可能)" helperText="ここにファイルをドラッグアンドドロップするかクリックしファイルを選択してください" />
        <FullWidthTextField label="希望貸出ポイント数" helperText="1~5000ポイントで任意で入力してください。" />
        <FullWidthTextField label="詳細" rows={4} helperText="色、素材、定価、重さ、注意点など" />
        <Button
        variant="contained"
        // key={item.id}
        onClick={(event) => {
          event.preventDefault();
          classToggle();
          showSnackbar('登録が完了しました！', 'success');}}
        >
        貸し出し申請</Button>
      </Container>
    </React.Fragment>
  );
}

// 見た目部分
