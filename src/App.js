import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar"

function App() {
  return (
    <Box>

      {/* navbar */}
      <Navbar/>

      <Stack direction="row" spacing={2} justifyContent="space-between">

      <Sidebar/>
      <Feed/>
      <Rightbar/>

      </Stack>



    </Box>
  );
}

export default App;
