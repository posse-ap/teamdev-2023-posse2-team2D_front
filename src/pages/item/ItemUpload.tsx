import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useSnackbar } from "../../components/snackbar/Snackbar";
import {
  Control,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  Button,
  Typography,
} from "@mui/material";
import RegisterContent from "../../components/register/RegisterContent";
import { useNavigate } from "react-router-dom";


export default function ItemUpload() {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();
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
    showSnackbar("貸出申請が完了しました！", "success");
    navigate("/"); // トップページに遷移
  };
  // 画像
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
          <RegisterContent
            title="商品貸し出し"
            // commentName={"comment"}
            control={control as unknown as Control<FieldValues, any>}
            imageFiles={itemImages}
            // imageUrls={handbook?.item.image_urls ?? []}
            imageUrls={[]}
            setImages={setItemImages}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", width: "50%", py: 1 }}
          >
            貸し出し申請
          </Button>
        </Container>
      </React.Fragment>
    </form>
  );
}

