import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar"
import AddFooter  from "./components/AddFooter";

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
      <AddFooter/>



    </Box>
  );
}

export default App;
