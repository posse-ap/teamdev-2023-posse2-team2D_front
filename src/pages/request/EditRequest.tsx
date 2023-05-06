import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { requestData, RequestData } from "./RequestDetail";
import styles from "../homePage/HomePage.module.scss";
import { useSnackbar } from "../../components/snackbar/Snackbar";


const EditRequest = () => {
  const navigate = useNavigate();
  const requestId = parseInt(useParams<{ id: string }>().id ?? "", 10);
  const request = requestData.find(
    (r: { id: number }) => r.id === Number(requestId)
  );

  const [title, setTitle] = useState<string>(request?.title || "");
  const [content, setContent] = useState<string>(request?.content || "");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const { showSnackbar } = useSnackbar();

  const handleUpdate = () => {
    if (!request) {
      return;
    }
    const updatedRequest: RequestData = {
      ...request,
      title,
      content,
    };
    const index = requestData.findIndex((r) => r.id === request.id);
    if (index >= 0) {
      requestData.splice(index, 1, updatedRequest);
    }
    showSnackbar("リクエスト内容を更新しました！", "success");
    navigate(`/request/${requestId}`);
  };

  const handleCancel = () => {
    navigate(`/request/${requestId}`);
  };

  if (!request) {
    return <div>リクエストが見つかりませんでした。</div>;
  }

  return (
    <div className={styles.root}>
      <h1 style={{ fontSize: "24px", textAlign: "center" }}>リクエスト編集</h1>
      <Box sx={{ mx: "auto", width: "40%" }}>
        <Typography
          sx={{
            mt: 3,
            mb: 1,
            fontSize: "20px",
            fontWeight: "bold",
            color: "#666666",
          }}
        >
          商品名
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          value={title}
          onChange={handleTitleChange}
        />
        <Typography
          sx={{
            mt: 3,
            fontSize: "20px",
            fontWeight: "bold",
            color: "#666666",
          }}
        >
          詳細
        </Typography>
        <TextField
          fullWidth
          multiline
          minRows={4}
          maxRows={8}
          variant="outlined"
          size="small"
          value={content}
          onChange={handleContentChange}
        />
      </Box>
      <Box className={styles.buttons}>
        <Button
          sx={{margin: '20px', fontWeight: 'bold', width: '200px', height: '40px'}}
          variant="contained" color="error"  onClick={handleCancel}>
          キャンセル
        </Button>
        <Button
          variant="contained"
          onClick={handleUpdate}
          sx={{margin: '20px', fontWeight: 'bold', width: '200px', height: '40px'}}
        >
          更新
        </Button>
      </Box>
    </div>
  );
};

export default EditRequest;
