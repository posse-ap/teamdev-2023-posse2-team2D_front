import { ChevronLeft } from '@mui/icons-material';
import { Box, IconButton, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React, { ReactNode } from 'react';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CategoryIcon from '@mui/icons-material/Category';
import SchoolIcon from '@mui/icons-material/School';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type Props = {
  handleMenuItemClick: (key: string, path: string) => void;
  onClose: () => void;
};

type DrawerItem = {
  key: string;
  text: string;
  icon: ReactNode;
  path: string;
  allowedRoles: string[];
};

type IndividualItem = {
  key: string;
  text: string;
  icon: ReactNode;
  path: string;
};

const drawerMenuList: DrawerItem[] = [
  {
    key: 'userList',
    text: 'ユーザー一覧',
    icon: <SupervisedUserCircleIcon />,
    path: 'userList',
    allowedRoles: ['admin', 'student'],
  },
  {
    key: 'requestList',
    text: 'リクエスト一覧',
    icon: <QuestionAnswerIcon />,
    path: 'requestList',
    allowedRoles: ['admin', 'student'],
  },
  {
    key: 'exchange',
    text: '換金対応',
    icon: <CurrencyExchangeIcon />,
    path: 'exchange',
    allowedRoles: ['admin'],
  },
  {
    key: 'allTransaction',
    text: '全取引一覧',
    icon: <FormatListBulletedIcon />,
    path: 'allTransactionList',
    allowedRoles: ['admin'],
  },
  {
    key: 'itemTransaction',
    text: '商品取引一覧',
    icon: <CategoryIcon />,
    path: 'itemTransactionList',
    allowedRoles: ['admin', 'student'],
  },
  {
    key: 'knowledgeTransaction',
    text: '知識共有一覧',
    icon: <SchoolIcon />,
    path: 'knowledgeTransactionList',
    allowedRoles: ['admin', 'student'],
  },
  {
    key: 'itemsManagement',
    text: '商品/ナレッジ管理',
    icon: <ManageSearchIcon />,
    path: 'itemsManagement',
    allowedRoles: ['admin'],
  },
];

const individualItem: IndividualItem[] = [
  {
    key: 'Mypage',
    text: 'マイページ',
    icon: <AccountCircleIcon />,
    path: 'mypage',
  },
];

export default function SideMenu({ handleMenuItemClick, onClose }: Props) {
  return (
  <>
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: 1,
        ...theme.mixins.toolbar,
      })}
    >
      <IconButton onClick={onClose}>
        <ChevronLeft />
      </IconButton>
    </Box>
    <Divider />
    <List>
      {drawerMenuList.map(({ key, text, icon, path }) => (
        <Box key={key}>
          <ListItem disablePadding onClick={() => handleMenuItemClick(key, path)}>
            <ListItemButton sx={{ pl: 4, pr: 8, py: 1 }}>
              {icon}
              <ListItemText primary={text} sx={{ ml: 2 }} />
            </ListItemButton>
          </ListItem>
        </Box>
      ))}
    </List>
    <Divider />
    <List>
      {individualItem.map(({ key, text, icon, path }) => (
        <Box key={key}>
          <ListItem disablePadding onClick={() => handleMenuItemClick(key, path)}>
            <ListItemButton sx={{ pl: 4, pr: 8, py: 1 }}>
              {icon}
              <ListItemText primary={text} sx={{ ml: 2 }} />
            </ListItemButton>
          </ListItem>
        </Box>
      ))}
    </List>
  </>
  );
}
