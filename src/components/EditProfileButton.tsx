import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const EditProfileButton = () => {

  const navigate = useNavigate();

  function EditProfile () {
    navigate('/mypage/profile/edit');
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', padding: '20px 0',}}>
      <Button variant="outlined" style={{width: '300px', height:'30px', cursor: 'pointer', color: 'red', borderColor: 'red',}} onClick={EditProfile}>プロフィールを編集</Button>
    </Box>
  );
}

export default EditProfileButton;