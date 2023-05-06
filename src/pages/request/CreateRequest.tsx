import React, { useState, useEffect } from "react";
import logo from "../../logo.jpg";
import {
  Typography,
  Button,
  TextField,
  FormHelperText,
  FormControl,
} from "@mui/material";
import {
  Controller,
  useForm,
  SubmitHandler,
  Control,
  FieldValues,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../homePage/HomePage.module.scss";
import { useSnackbar } from "../../components/snackbar/Snackbar";


const UserInfo = {
  id: 1,
  email: "kazuki@peerpark.com",
  name: "多田一稀",
  image: logo,
  role: 1,
  slack_id: "サンプルサンプル",
  supply_points: 5000,
  get_points: 20000,
  pending_points: 5000,
  position: "社畜",
  title: "サッカー、プログラミング、（サウナ）",
  detail: "最近、自分を見つめて生きています。",
};

const validationRules = {
  title: {
    required: "商品名を入力してください。",
    maxLength: { value: 40, message: "40文字以内で入力してください" },
  },
  detail: {
    required: "詳細を入力してください。",
    maxLength: { value: 300, message: "300文字以内で入力してください" },
  },
};

const CreateRequest = () => {
  // 1. 入力値の定義を作成
  type Inputs = {
    title: string;
    detail: string;
  };

  const { showSnackbar } = useSnackbar();
  const { handleSubmit, control } = useForm<Inputs>({});
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(`submit: ${data}`);
    showSnackbar("リスエストが完了しました！", "success");
    navigate("../requestList"); // リクエスト一覧画面に遷移
  };

  const [title, setTitle] = useState(UserInfo.title);
  const [detail, setDetail] = useState(UserInfo.detail);

  const [titleHelperText, setTitleHelperText] = useState("0/40");
  const [detailHelperText, setDetailHelperText] = useState("0/300");

  useEffect(() => {
    setTitle(title);
  }, [title]);

  useEffect(() => {
    setDetail(detail);
  }, [detail]);

  useEffect(() => {
    setTitleHelperText(`${titleHelperText.length}/40`);
  }, [titleHelperText]);

  useEffect(() => {
    setDetailHelperText(`${detailHelperText.length}/300`);
  }, [detailHelperText]);

  const headStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#666666",
    textAlign: "center",
    paddingBottom: "30px",
  };

  const labelStyle = {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#333333",
    width: "35%",
  };


  return (
    <div className={styles.root} style={{ width: "600px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h1" sx={headStyle}>
          新規リクエスト
        </Typography>
        <p style={labelStyle}>商品名</p>
        <Controller
          name="title"
          control={control as unknown as Control<FieldValues, any>}
          defaultValue=""
          rules={validationRules.title}
          render={({ field, fieldState }) => (
            <FormControl
              error={!!fieldState.error?.message}
              sx={{ width: "100%" }}
            >
              <TextField
                {...field}
                fullWidth
                multiline
                helperText={`${field.value.length}/40`}
                maxRows={1}
                error={fieldState.error ? true : false}
              />
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <p style={labelStyle}>詳細</p>
        <Controller
          name="detail"
          control={control as unknown as Control<FieldValues, any>}
          defaultValue=""
          rules={validationRules.detail}
          render={({ field, fieldState }) => (
            <FormControl
              error={!!fieldState.error?.message}
              sx={{ width: "100%" }}
            >
              <TextField
                {...field}
                label="色、素材、定価、重さ、注意点など"
                fullWidth
                multiline
                rows="6"
                helperText={`${field.value.length}/300`}
                error={fieldState.error ? true : false}
              />
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            </FormControl>
          )}
        />
        <Button variant="contained" className={styles.create_request_button} type="submit">
          登録
        </Button>
      </form>
    </div>
  );
};

export default CreateRequest;
