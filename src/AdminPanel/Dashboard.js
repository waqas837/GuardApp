import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar";
import { MainCyan, useStyles } from "../Styles/Main.Styles";
import dummyimg from "../images/download.jpg";
import dummylocation from "../images/locationimage.png";
import {
  AccountCircle,
  Assistant,
  Edit,
  ErrorOutline,
  People,
  Person,
  Sms,
} from "@material-ui/icons";
import { green } from "@material-ui/core/colors";
const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      {/* navbar */}
      <Navbar />

      <Box mt={5} className={classes.resposiveFromSide}>
        <Container maxWidth="md">
          {/* We need put five items in the grid */}
          {/* Main line 1 */}
          <Grid container spacing={3}>
            {/* item 1 */}
            <Grid item xs={12} md>
              <Card>
                <Typography
                  style={{
                    color: MainCyan,
                    fontSize: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                  variant="body2"
                >
                  <Person fontSize="small" /> Number of users Register
                </Typography>
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    210 | 210 |210
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      background: green[100],
                      fontSize: "10px",
                      fontColor: green[600],
                      borderRadius: "10px",
                      marginLeft: "25px",
                    }}
                  >
                    {" "}
                    Add new user
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* item end */}
            {/* item 2 */}
            <Grid item xs={12} md>
              <Card>
                <Typography
                  style={{
                    color: MainCyan,
                    fontSize: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                  variant="body2"
                >
                  <Assistant fontSize="small" /> Number of Incidents
                </Typography>
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    210 | 210 |210
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      background: green[100],
                      fontSize: "10px",
                      fontColor: green[600],
                      borderRadius: "10px",
                      marginLeft: "15px",
                    }}
                  >
                    {" "}
                    Add new incident
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* item end */}
            {/* item 3 */}
            <Grid item xs={12} md>
              <Card>
                <Typography
                  style={{
                    color: MainCyan,
                    fontSize: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                  variant="body2"
                >
                  <ErrorOutline fontSize="small" /> Number of alerts
                </Typography>
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    210 | 210 |210
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      background: green[100],
                      fontSize: "10px",
                      fontColor: green[600],
                      borderRadius: "10px",
                      marginLeft: "15px",
                    }}
                  >
                    {" "}
                    Add new incident
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* item end */}
            {/* item 4 */}
            <Grid item xs={12} md>
              <Card>
                <Typography
                  style={{
                    color: MainCyan,
                    fontSize: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                  variant="body2"
                >
                  <Sms fontSize="small" /> Number of comments
                </Typography>
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    210 | 210 |210
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      background: green[100],
                      fontSize: "10px",
                      fontColor: green[600],
                      borderRadius: "10px",
                      marginLeft: "15px",
                    }}
                  >
                    {" "}
                    Add new incident
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {/* item end */}
            {/* item 5 */}
            <Grid item xs={12} md>
              <Card>
                <Typography
                  style={{
                    color: MainCyan,
                    fontSize: "10px",
                    marginTop: "10px",
                    marginLeft: "10px",
                  }}
                  variant="body2"
                >
                  <People fontSize="small" /> Total Users Online
                </Typography>
                <CardContent>
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    <AccountCircle
                      fontSize="large"
                      style={{ color: MainCyan }}
                    />{" "}
                    234
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* item end,last */}
          </Grid>
          {/* main line 2 */}
          <Grid container>
            {/* locaiton grid */}
            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <Box my={2}>
                <img src={dummylocation} width="100%" height="auto" alt="" />
              </Box>
            </Grid>

            {/* team members */}
            <Box>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <Box mt={3} ml={9}>
                  <Card classes={{ root: classes.card }}>
                    <Typography style={{ color: MainCyan }} variant="h6">
                      <Person
                        fontSize="large"
                        style={{ marginLeft: "10px", marginTop: "7px" }}
                      />
                      Team Members
                    </Typography>
                    <CardContent>
                      {/* members line i */}
                      <Grid container spacing={3}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                          <img
                            src={dummyimg}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "40px",
                            }}
                            alt=""
                          />
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Box display="inline">
                            <Typography
                              variant="subtitle2"
                              style={{ fontWeight: "bold" }}
                            >
                              {" "}
                              John Deo{" "}
                            </Typography>
                            <Typography variant="subtitle2">
                              {" "}
                              Administator
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                          <IconButton>
                            <Edit
                              style={{ color: MainCyan }}
                              fontSize="small"
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                      {/* members line i */}
                      <Grid container spacing={3}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                          <img
                            src={dummyimg}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "40px",
                            }}
                            alt=""
                          />
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Box display="inline">
                            <Typography
                              variant="subtitle2"
                              style={{ fontWeight: "bold" }}
                            >
                              {" "}
                              John Deo{" "}
                            </Typography>
                            <Typography variant="subtitle2">
                              {" "}
                              Administator
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                          <IconButton>
                            <Edit
                              style={{ color: MainCyan }}
                              fontSize="small"
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                      {/* members line i */}
                      <Grid container spacing={3}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                          <img
                            src={dummyimg}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "40px",
                            }}
                            alt=""
                          />
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Box display="inline">
                            <Typography
                              variant="subtitle2"
                              style={{ fontWeight: "bold" }}
                            >
                              {" "}
                              John Deo{" "}
                            </Typography>
                            <Typography variant="subtitle2">
                              {" "}
                              Administator
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                          <IconButton>
                            <Edit
                              style={{ color: MainCyan }}
                              fontSize="small"
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                      {/* members line i */}
                      <Grid container spacing={3}>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                          <img
                            src={dummyimg}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "40px",
                            }}
                            alt=""
                          />
                        </Grid>
                        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
                          <Box display="inline">
                            <Typography
                              variant="subtitle2"
                              style={{ fontWeight: "bold" }}
                            >
                              {" "}
                              John Deo{" "}
                            </Typography>
                            <Typography variant="subtitle2">
                              {" "}
                              Administator
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                          <IconButton>
                            <Edit
                              style={{ color: MainCyan }}
                              fontSize="small"
                            />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        size="small"
                        style={{
                          background: green[100],
                          fontSize: "10px",
                          fontColor: green[600],
                          borderRadius: "10px",
                          marginLeft: "75px",
                        }}
                      >
                        {" "}
                        View
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Dashboard;
