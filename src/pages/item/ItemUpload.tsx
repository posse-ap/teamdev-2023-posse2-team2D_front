import React, { useEffect, useMemo, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FullWidthTextField from "../../components/FullWidthTextField";
import { useSnackbar } from "../../components/snackbar/Snackbar";
import {
  Control,
  FieldValues,
  Controller,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Slider,
} from "@mui/material";
import RegisterContent from "../../components/register/RegisterContent";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

// フロント部分
export default function ItemUpload() {
  const { showSnackbar } = useSnackbar();
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
  };

  // 1. 入力値の定義を作成
  type Inputs = {
    comment: string;
  };
  // 2. useFormで必要な関数を取得し、デフォルト値を指定
  const { control, handleSubmit } = useForm<Inputs>({});

  // 4. サブミット時の処理を作成
  // 検証が成功すると呼び出され、引数で入力値が渡ってくる
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(`submit: ${data.comment}`);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();

  // const { handbooks, status } = useAppSelector(handbookSelector);
  // const { statusLabel, status: assignmentStatus } = useAppSelector(assignmentSelector);
  // const [handbook, setHandbook] = useState<Handbook>();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  // 画像
  const [explanationImages, setExplanationImages] = useState<File[]>([]);

  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <React.Fragment>
        <CssBaseline />
        <Container
          sx={{
            width: "50%",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <h2>商品貸し出し</h2>
          {/* <FullWidthTextField label="商品名" helperText="/40" />
        <FullWidthTextField label="商品画像(3枚まで可能)" helperText="ここにファイルをドラッグアンドドロップするかクリックしファイルを選択してください" />
        <FullWidthTextField label="希望貸出ポイント数" helperText="1~5000ポイントで任意で入力してください。" />
        <FullWidthTextField label="詳細" rows={4} helperText="色、素材、定価、重さ、注意点など" />
        <Button
        sx={{ fontWeight: "bold", mt: 2 }}
        variant="contained"
        onClick={(event) => {
          event.preventDefault();
          classToggle();
          showSnackbar('登録が完了しました！', 'success');}}
        >
        貸し出し申請</Button> */}

          <RegisterContent
            title=""
            // commentName={"comment"}
            control={control as unknown as Control<FieldValues, any>}
            imageFiles={explanationImages}
            // imageUrls={handbook?.explanation.image_urls ?? []}
            imageUrls={[]}
            setImages={setExplanationImages}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", width: "50%", py: 1 }}
            // disabled={isSubmitting}
          >
            貸し出し申請
          </Button>
        </Container>
      </React.Fragment>
    </form>
  );
}

// 見た目部分
