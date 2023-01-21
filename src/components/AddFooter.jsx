import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { DateRange, EmojiEmotions, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Stack } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
});

const AddFooter = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% -25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={200}  height={250} p={3} bgcolor={"background.default"} color="text.primary" borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://mui.com/static/images/avatar/1.jpg"
              alt=""
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Dennis Mas
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={4}
            variant="standard"
            placeholder="What's on your mind"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            {/* <Image color="secondary"/> */}
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{width:"100px"}}>Post</Button>
            <Button ><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddFooter;
