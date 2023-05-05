import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useSnackbar } from "../../components/snackbar/Snackbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Control,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Button, Typography } from "@mui/material";
import RegisterKnowledge from "../../components/register/RegisterKnowledge";
import { useNavigate } from "react-router-dom";

// フロント部分
export default function ItemUpload() {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleClick = () => {
    showSnackbar("貸出申請が完了しました！", "success");
    navigate("/"); // トップページに遷移
  };

  const handleBack = () => {
    navigate(-1);
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

  const [itemImages, setItemImages] = useState<File[]>([]);

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
          <Typography
            color="blue"
            display="flex"
            alignItems="center"
            sx={{ fontSize: 16}}
            onClick={handleBack}
          >
            <ArrowBackIosIcon sx={{ width: 16 }} />
            戻る
          </Typography>
          <RegisterKnowledge
            title=""
            // commentName={"comment"}
            control={control as unknown as Control<FieldValues, any>}
            imageFiles={itemImages}
            // imageUrls={item?.image_urls ?? []}
            imageUrls={[]}
            setImages={setItemImages}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", width: "50%", py: 1 }}
            onClick={handleClick}
          >
            開催/共有
          </Button>
        </Container>
      </React.Fragment>
    </form>
  );
}

// 見た目部分
