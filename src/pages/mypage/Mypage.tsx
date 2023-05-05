import { type } from "os";
import logo from '../../logo.jpg';
import React from "react";
import { Box } from "@mui/material";
import UserInformation from "../../components/UserInformation";
import EditProfileButton from "../../components/EditProfileButton";

// type Users = {
//   id: number;
//   email: string;
//   name: string;
//   image: string;
//   role: number;
//   slack_id: string;
//   supply_points: number;
//   get_points: number;
//   pending_points: number;
//   position: string;
//   hobby: string;
//   profile: string;
// }

// const users: Users = 
// {
//   id: 1,
//   email: "kazuki@peerpark.com",
//   name: "多田一稀",
//   image: logo,
//   role: 1,
//   slack_id: "サンプルサンプル",
//   supply_points: 5000,
//   get_points: 20000,
//   pending_points: 5000,
//   position: "社畜",
//   hobby: "サッカー、プログラミング、（サウナ）",
//   profile: "最近、自分を見つめて生きています。"
// };


const Mypage = () => {
  return (
    <div>
      <UserInformation />
      <EditProfileButton />
    </div>
  );
}

export default Mypage;