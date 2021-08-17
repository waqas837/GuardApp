import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  IconButton,
  OutlinedInput,
  Paper,
} from "@material-ui/core";
import userimg from "../images/download.jpg";
import GoogleMapMarkerTest from "../GoogleMaps/GoogleMapMarkerTest"
import { grey } from "@material-ui/core/colors";
import { Add, PictureAsPdf } from "@material-ui/icons";
import { MainCyan, useStyles } from "../Styles/Main.Styles";
import Navbar from "./Navbar";

const SearchIncidents = () => {
  const classes = useStyles();
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* welcome to search user */}
      <Box mt={5} className={classes.resposiveFromSide}>
        <Container maxWidth="md">
          {/* line 0 */}
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Typography style={{ fontWeight: "bold" }} variant="h6">
                Search Incidents
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Box textAlign="right">
                {/* pdf icon */}
                <IconButton>
                  <PictureAsPdf fontSize="small" style={{ color: MainCyan }} />
                </IconButton>
                 {/* add icon */}
                 <IconButton>
                  <Add fontSize="small" style={{ color: MainCyan }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          {/* mainline 1 */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Box className={classes.resposiveFromSide}></Box>
              <Box my={2}>
                <Paper
                  className={classes.resposiveFromSide}
                  style={{ borderRadius: "0px", paddingBottom: "7px" }}
                >
                  {/* line for the user and map */}
                  <Grid container>
                    {/* user search coloumn */}
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      {/* search input */}
                      <Box
                        my={1}
                        pt={2}
                        pb={3}
                        style={{ background: grey[200] }}
                      >
                        <Container>
                          <OutlinedInput
                            placeholder="Type location"
                            className={classes.input}
                            style={{ background: "white" }}
                          />
                        </Container>
                        {/* adding a grid for profile image and name */}
                        <Container>
                          <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box my={1}>
                                <img
                                  src={userimg}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "100px",
                                  }}
                                  alt=""
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box mt={2}>
                                <Typography style={{fontWeight:"bold"}} variant="subtitle2">
                                  John Doe
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box my={1}>
                                <img
                                  src={userimg}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "100px",
                                  }}
                                  alt=""
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box mt={2}>
                                <Typography style={{fontWeight:"bold"}} variant="subtitle2">
                                  John Doe
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box my={1}>
                                <img
                                  src={userimg}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "100px",
                                  }}
                                  alt=""
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box mt={2}>
                                <Typography style={{fontWeight:"bold"}} variant="subtitle2">
                                  John Doe
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box my={1}>
                                <img
                                  src={userimg}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "100px",
                                  }}
                                  alt=""
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box mt={2}>
                                <Typography style={{fontWeight:"bold"}} variant="subtitle2">
                                  John Doe
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box my={1}>
                                <img
                                  src={userimg}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "100px",
                                  }}
                                  alt=""
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box mt={2}>
                                <Typography style={{fontWeight:"bold"}} variant="subtitle2">
                                  John Doe
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box my={1}>
                                <img
                                  src={userimg}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "100px",
                                  }}
                                  alt=""
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box mt={2}>
                                <Typography style={{fontWeight:"bold"}} variant="subtitle2">
                                  John Doe
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box my={1}>
                                <img
                                  src={userimg}
                                  style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "100px",
                                  }}
                                  alt=""
                                />
                              </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                              <Box mt={2}>
                                <Typography style={{fontWeight:"bold"}} variant="subtitle2">
                                  John Doe
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Container>
                         {/* End for adding a grid for profile image and name */}
                      </Box>
                    </Grid>
                    {/* map coloumn */}
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Container maxWidth="sm">
                      <GoogleMapMarkerTest/>
                        </Container>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default SearchIncidents;
