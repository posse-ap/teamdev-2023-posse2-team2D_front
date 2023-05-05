import { Box } from '@mui/material';
import React from 'react';
import logo from '../logo.jpg';

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
  hobby: "サッカー、プログラミング、（サウナ）",
  profile: "最近、自分を見つめて生きています。",
}

const UserInformation = () => {

  const FlexStyles = {
    display: 'flex',
    gap: '10%',
  };

  const LabelStyles = {
    width: '30%',
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'right',
    paddingBottom: '20px',
  }

  const ContentStyles = {
    width: '60%',
    fontSize: '15px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '20px',
  }

  return(
    <div style={{width: '500px', margin: '0 auto',}}>
        <p style={{fontSize: '20px', fontWeight: 'bold',paddingBottom: '15px' ,borderBottom: '1px solid #E5E5E5'}}>プロフィール</p>
        <Box sx={FlexStyles}>
        <Box sx={{width: '30%', textAlign: 'center', paddingBottom: '15px',}}>
        <img style={{width: '60px', borderRadius: '50%',}} src={UserInfo.image} alt="" />
        </Box>
        <Box sx={ContentStyles}>{UserInfo.name}</Box>
        </Box>
        <Box sx={FlexStyles}>
          <Box sx={LabelStyles}>メールアドレス</Box>
          <Box sx={ContentStyles}>{UserInfo.email}</Box>
        </Box>
        <Box sx={FlexStyles}>
          <Box sx={LabelStyles}>趣味</Box>
          <Box sx={ContentStyles}>{UserInfo.hobby}</Box>
        </Box>
        <Box sx={FlexStyles}>
          <Box sx={LabelStyles}>自己紹介</Box>
          <Box sx={ContentStyles}>{UserInfo.profile}</Box>
        </Box>
    </div>
  );
}

export default UserInformation;
