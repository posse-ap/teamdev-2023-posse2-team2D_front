import { Warning } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { ImageUpload } from "../ImageUpload";

type Props = {
  title: string;
  control: Control<FieldValues, any>;
  imageFiles: File[];
  imageUrls: string[];
  setImages: React.Dispatch<React.SetStateAction<File[]>>;
};

const validationRules = {
  name: {
    required: { value: true, message: "商品名を入力してください" },
    maxLength: { value: 40, message: "40文字以内で入力してください" },
  },
  desired_points: {
    min: { value: 1, message: "1ポイント以上を入力してください" },
    max: { value: 5000, message: "5000ポイント以下を入力してください" },
    pattern: {
      value: /^\d+$/,
      message: "数値を入力してください",
    },
  },
  comment: {
    maxLength: { value: 1000, message: "1000文字以内で入力してください" },
  },
};

export const RegisterContent = ({
  title,
  control,
  imageFiles,
  imageUrls,
  setImages,
}: // commentName,
Props) => {
  return (
    <Grid container spacing={1} justifyContent="space-between">
      <Grid item xs={12} md={12} sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={3} md={6} sx={{ textAlign: "right" }}></Grid>
      <Grid item xs={12}>
        <Typography
          sx={{
            mb: 3,
            color: "red",
            display: "flex",
            alignItems: "center",
            gap: 1,
            border: "1px solid red",
            fontSize: 12,
            p: 1,
            borderRadius: 1,
          }}
        >
          <Warning fontSize={"small"} />
          内容を更新する際には、画像に変更がなくとも、登録する画像を再度選択、アップロードしてください。
          (再選択がないと画像・動画が削除されてしまいます。)
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "left",
            mb: 1,
          }}
        >
          商品名(40文字以内)
        </Typography>
        <Controller
          name="name"
          control={control}
          rules={validationRules.name}
          render={({ field, fieldState }) => (
            <FormControl
              error={!!fieldState.error?.message}
              sx={{ width: "100%" }}
            >
              <TextField
                {...field}
                error={fieldState.error ? true : false}
                label="例) MacBook Pro 13インチ 2019年モデル"
                variant="outlined"
                fullWidth
                multiline
                // helperText="例) MacBook Pro 13インチ 2019年モデル"
              />
              <FormHelperText sx={{ position: "absolute", top: "100%", mb: 3 }}>
                {fieldState.error?.message}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
      <Grid item md={12} xs={12} sx={{ mb: 2 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "left",
            mb: 1,
          }}
        >
          商品画像(3枚まで登録可能)
        </Typography>
        <ImageUpload
          images={imageFiles}
          imageUrls={imageUrls}
          setImages={setImages}
        />
      </Grid>
      <Grid item xs={12} sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "left",
            mb: 1,
          }}
        >
          希望貸出ポイント数(1~5000ポイントで任意で入力してください。)
        </Typography>
        <Controller
          name="desired_points"
          control={control}
          rules={validationRules.desired_points}
          render={({ field, fieldState }) => (
            <FormControl
              error={!!fieldState.error?.message}
              sx={{ width: "100%" }}
            >
              <TextField
                {...field}
                type="number"
                error={fieldState.error ? true : false}
                variant="outlined"
                fullWidth
                multiline
              />
              <FormHelperText sx={{ position: "absolute", top: "100%", mb: 2 }}>
                {fieldState.error?.message}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
      <Grid item xs={12} sx={{ mb: 5 }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            textAlign: "left",
            mb: 1,
          }}
        >
          商品詳細(1000文字以内)
        </Typography>
        <Controller
          name="item_detail"
          control={control}
          rules={validationRules.comment}
          render={({ field, fieldState }) => (
            <FormControl
              error={!!fieldState.error?.message}
              sx={{ width: "100%" }}
            >
              <TextField
                {...field}
                error={fieldState.error ? true : false}
                label="色、素材、定価、重さ、注意点など"
                variant="outlined"
                fullWidth
                rows={4}
                multiline
              />
              <FormHelperText
                sx={{ position: "absolute", top: "100%", m: 0.5 }}
              >
                {fieldState.error?.message}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default RegisterContent;
