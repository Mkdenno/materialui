import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Fab, Modal, Tooltip, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
          <Box width={300} bgcolor="white" height={150} p={3} borderRadius={5}>
            yoh
          </Box>
      </StyledModal>
    </>
  );
};

export default AddFooter;
