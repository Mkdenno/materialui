import {Box} from '@mui/material'
import React from 'react'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVert from '@mui/icons-material/MoreVert';

import Post from './Post';






const Feed = () => {
  return (
    <Box  flex={4} p={2}>
      
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Box>
  )
}

export default Feed