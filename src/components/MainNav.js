import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';
import LiveTvTwoToneIcon from '@mui/icons-material/LiveTvTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Paper } from '@mui/material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
  }, [value, navigate]);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
       className='my-class'
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          "& .Mui-selected, .Mui-selected > svg": {
            color: "white",
          },
          backgroundColor: "#01083f",
        }}
      >
        <BottomNavigationAction style={{color:'white'}} label="Trending" icon={<WhatshotTwoToneIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Movies" icon={<MovieCreationTwoToneIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="TV Series" icon={<LiveTvTwoToneIcon />} />
        <BottomNavigationAction style={{color:'white'}} label="Search" icon={<SearchTwoToneIcon />} />
      </BottomNavigation>
    </Paper>
  );
}