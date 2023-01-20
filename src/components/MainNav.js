import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ 
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100, }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{color:'white'}} label="Trending" icon={<WhatshotTwoToneIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Movies" icon={<MovieCreationTwoToneIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="TV Series" icon={<LiveTvTwoToneIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Search" icon={<SearchTwoToneIcon />} />
      </BottomNavigation>
    </Box>
  );
}