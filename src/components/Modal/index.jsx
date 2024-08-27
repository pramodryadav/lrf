import * as React from 'react';
import { Dialog, DialogContent,AppBar, Toolbar, IconButton, Typography, } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function ReceiptDialog({ open, title,children, onClose, fullScreen, maxWidth }) {
  // Sample receipt data

  return (
    <Dialog
      fullScreen={fullScreen || false}
      maxWidth={maxWidth || "md"}
      fullWidth={true}
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}

    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar className="reciptToolbar">
          
          <Typography sx={{  flex: 1 }} variant="h6" component="div">
            {title}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
         
        </Toolbar>
      </AppBar>

      <DialogContent>
          {children}
      </DialogContent>
    </Dialog>
  );
}
