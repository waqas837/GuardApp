import React, { useState } from "react";
import AddAndEditMemberDialog from "./AddAndEditMemberDialog";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  OutlinedInput,
  Paper,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import { MainCyan, useStyles } from "../Styles/Main.Styles";
import { Add, Edit } from "@material-ui/icons";
const EditProfile = () => {
  const [open, setopen] = useState(false);
  const classes = useStyles();
  return (
    <Box>
      {/* navbar */}
      <Navbar />
      {/* edit and add member dialog */}
      <AddAndEditMemberDialog open={open} setopen={setopen} />
      {/* welcome to edit profile */}
      <Box mt={5}>
        <Container maxWidth="md">
          {/* line 1 */}
          <Grid container spacing={3}>
            {/* line 1, col 1 */}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box my={2}>
                <Paper
                  className={classes.resposiveFromSide}
                  style={{ borderRadius: "0px", paddingBottom: "7px" }}
                >
                  <Box ml={1} my={2}>
                    <Typography style={{ fontWeight: "bold" }} variant="h6">
                      Edit Profile
                    </Typography>
                  </Box>
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
                        className={classes.input}
                      />
                    </Container>
                  </Box>
                  {/* input */}
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Phone Number"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>
                  {/* input */}
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="New Password"
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
                  {/* button */}
                  <Box>
                    <Container>
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
                </Paper>
              </Box>
            </Grid>
            {/* 2.Edit member */}
            {/* line 1, col 2 */}
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Paper
                className={classes.resposiveFromSide}
                style={{ borderRadius: "0px", paddingBottom: "7px" }}
              >
                <Box ml={1} my={2}>
                  <Typography style={{ fontWeight: "bold" }} variant="h6">
                    Edit Member
                  </Typography>
                </Box>
                <Box my={1}>
                  <Container>
                    {/* one grid line with 3 items */}
                    <Box my={2}>
                      <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            John Doe
                          </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            Administator
                          </Typography>
                        </Grid>
                        {/* icon */}
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Box mt={-1} textAlign="right">
                            {/* edit icon */}
                            <IconButton onClick={() => setopen(true)}>
                              <Edit
                                fontSize="small"
                                style={{ color: MainCyan }}
                              />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* ends grid one line with 3 items */}
                    {/* one grid line with 3 items */}
                    <Box my={2}>
                      <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            John Doe
                          </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            Administator
                          </Typography>
                        </Grid>
                        {/* icon */}
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Box mt={-1} textAlign="right">
                            {" "}
                            <IconButton onClick={() => setopen(true)}>
                              <Edit
                                fontSize="small"
                                style={{ color: MainCyan }}
                              />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* ends grid one line with 3 items */}
                    {/* one grid line with 3 items */}
                    <Box my={2}>
                      <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            John Doe
                          </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            Administator
                          </Typography>
                        </Grid>
                        {/* icon */}
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Box mt={-1} textAlign="right">
                            {" "}
                            <IconButton onClick={() => setopen(true)}>
                              <Edit
                                fontSize="small"
                                style={{ color: MainCyan }}
                              />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* ends grid one line with 3 items */}
                    {/* one grid line with 3 items */}
                    <Box my={2}>
                      <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            John Doe
                          </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            Administator
                          </Typography>
                        </Grid>
                        {/* icon */}
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Box mt={-1} textAlign="right">
                            {" "}
                            <IconButton onClick={() => setopen(true)}>
                              <Edit
                                fontSize="small"
                                style={{ color: MainCyan }}
                              />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* ends grid one line with 3 items */}
                    {/* one grid line with 3 items */}
                    <Box my={2}>
                      <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            John Doe
                          </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            Administator
                          </Typography>
                        </Grid>
                        {/* icon */}
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Box mt={-1} textAlign="right">
                            {" "}
                            <IconButton onClick={() => setopen(true)}>
                              <Edit
                                fontSize="small"
                                style={{ color: MainCyan }}
                              />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* ends grid one line with 3 items */}
                    {/* one grid line with 3 items */}
                    <Box my={2}>
                      <Grid container>
                        <Grid item xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            John Doe
                          </Typography>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Typography
                            style={{ fontWeight: "bold" }}
                            variant="body1"
                          >
                            Administator
                          </Typography>
                        </Grid>
                        {/* icon */}
                        <Grid xs={12} sm={6} md={4} lg={6} xl={6}>
                          <Box mt={-1} textAlign="right">
                            {" "}
                            <IconButton onClick={() => setopen(true)}>
                              <Edit
                                fontSize="small"
                                style={{ color: MainCyan }}
                              />
                            </IconButton>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* ends grid one line with 3 items */}
                  </Container>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default EditProfile;
