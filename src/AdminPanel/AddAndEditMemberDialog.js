import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  OutlinedInput,
  Typography,
} from "@material-ui/core";
import { EmailOutlined, HighlightOff } from "@material-ui/icons";
import { MainCyan, useStyles } from "../Styles/Main.Styles";

const AddAndEditMemberDialog = ({ open, setopen, user,posts }) => {
  const classes = useStyles();
  return (
    <div>
      {/* edit member dialog box */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>
      {/* ///////////////////////////////// */}
{/* immeditely invoked function ,wrap inside the brackets multiple conditions we can inside the jsx */}
      {
   (() => {
       if (user)
          return (<Typography style={{ fontWeight: "bold" }} variant="h6">
              Edit User
            </Typography>)
       if (posts)
          return (<Typography style={{ fontWeight: "bold" }} variant="h6">
              Edit Member
            </Typography>)
   })()
}

        {/* //////////////////////// */}
          
          {/* close icon button */}
          <Box textAlign="right" style={{ marginTop: "-40px" }}>
            <IconButton onClick={() => setopen(false)}>
              <HighlightOff style={{ color: MainCyan }} />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {/* input */}
          <Box my={1}>
            <Container>
              <OutlinedInput
                placeholder="Username"
                fullWidth
                className={classes.input}
              />
            </Container>
          </Box>
          {/* input */}
          <Box my={1}>
            <Container>
              <OutlinedInput
                placeholder="Fullname"
                fullWidth
                className={classes.input}
              />
            </Container>
          </Box>
          {/* input */}
          <Box my={1}>
            <Container>
              <OutlinedInput
                placeholder="Email address"
                fullWidth
                endAdornment={
                  <EmailOutlined fontSize="small" style={{ color: "grey" }} />
                }
                className={classes.input}
              />
            </Container>
          </Box>
          {/* input */}
          <Box my={1}>
            <Container>
              <OutlinedInput
                placeholder="Phone No"
                fullWidth
                className={classes.input}
              />
            </Container>
          </Box>
          {/* input */}
          <Box my={1}>
            <Container>
              <OutlinedInput
                placeholder="About Me"
                fullWidth
                className={classes.input}
              />
            </Container>
          </Box>
          {/* input */}
          {user ? null : (
            <div>
              <Box my={1}>
                <Container>
                  <OutlinedInput
                    placeholder="Role Type"
                    fullWidth
                    className={classes.input}
                  />
                </Container>
              </Box>
              <Box my={1}>
                <Container>
                  <OutlinedInput
                    placeholder="Password"
                    fullWidth
                    className={classes.input}
                  />
                </Container>
              </Box>
            </div>
          )}
          {/* button */}
          <Box>
            <Container>
              {/* we can put a condition also on behalf of different update member/user data please do it at last */}
              <Button
                variant="contained"
                fullWidth
                className={classes.buttonStyle}
                style={{ marginBottom: "16px" }}
              >
                Update
              </Button>
            </Container>
          </Box>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>
    </div>
  );
};

export default AddAndEditMemberDialog;
