import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './components/mainPage/MainPage';
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";



function App() {
  return (
    <Box className="page__wrapper">
      <Stack direction="row" spacing={1}>
        <Sidebar />
        <MainPage />
      </Stack>
    </Box>
  );
}

export default App;
