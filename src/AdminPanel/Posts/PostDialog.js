import React, { useContext, useEffect, useState } from "react";
import { AddIncidentByAdmin } from "../../Api/AdminIncidentsApi";
import { useHistory } from "react-router";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@material-ui/core";
import { MainCyan, useStyles } from "../../Styles/Main.Styles";
import dummyimg from "../../images/download.jpg";
import mapimg from "../../images/locationimage.png";
import Cookies from "js-cookie";
import Paractice from "../../Paractice";
import { MainContext } from "../Context/ContextApi";
import toast from "react-hot-toast";
// main
const PostDialog = ({ post, open, setopen }) => {
  const [state, setstate] = useState(undefined);
  const headers = {
    authorization: `Bearer ${Cookies.get("admin")}`,
  };
  const history = useHistory();
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const { lnglat, setlnglat } = useContext(MainContext);
  useEffect(() => {
    setstate({ ...state, location: lnglat });
  }, [lnglat]);
  // console.log(lnglat);

  //addIncidentByAdmin
  const addIncidentByAdmin = async () => {
    try {
      const { data } = await axios.post(`${AddIncidentByAdmin}`, state, {
        headers,
      });
      console.log(data);
      if (data.success) {
        toast.success("Incident added successfuly");
        history.push(`/posts/addFiles/${data.data._id}`);
      } else if (data.failure) {
        toast.error("Please fill all fields");
      }
    } catch (error) {
      console.log(error);
      toast.error("Please fill all fields");
    }
  };

  // select
  const handleChange = (event) => {
    setAge(event.target.value);
    setstate({ ...state, type: event.target.value });
  };

  return (
    <div>
      {/* order doesn't matter */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>
          {(() => {
            if (post === "EditPost") {
              return (
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Edit Post
                </Typography>
              );
            }
            if (post === "AddPost") {
              return (
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Add Post
                </Typography>
              );
            }
          })()}
        </DialogTitle>
        {/* content of dialog box */}
        <DialogContent>
          {/* iife for add a post */}
          {(() => {
            if (post === "AddPost") {
              return (
                <div>
                  {/* <Container maxWidth="xs">
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Input type="file" style={{ borderRadius: "10px" }} />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Input type="file" style={{ borderRadius: "10px" }} />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Input type="file" style={{ borderRadius: "10px" }} />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Input type="file" style={{ borderRadius: "10px" }} />
                      </Grid>
                    </Grid>
                  </Container> */}
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, title: e.target.value })
                        }
                        placeholder="Add title"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, description: e.target.value })
                        }
                        placeholder="Description"
                        fullWidth
                        multiline
                        rows={4}
                      />
                    </Container>
                  </Box>
                  {/* here it will be map */}
                  <Box my={1}>
                    <Container maxWidth="xs">
                      {/* <img src={mapimg} height="100px" width="400px" alt="" /> */}
                      <Paractice />
                    </Container>
                  </Box>
                  {/* end map */}
                  <Box my={1}>
                    {/* this will be a select element */}
                    <Container>
                      <FormControl className={classes.formControl}>
                        <InputLabel>Select Crime Type</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleChange}
                        >
                          <MenuItem value="Safety">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Safety
                            </Typography>
                          </MenuItem>
                          <MenuItem value="Crime">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Crime
                            </Typography>
                          </MenuItem>
                          <MenuItem value="Neighborly Moment">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Neighborly Moment
                            </Typography>
                          </MenuItem>
                          <MenuItem value="Missing person">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Missing Person
                            </Typography>
                          </MenuItem>
                          <MenuItem value="Suspicious Activity">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Suspicious Activity
                            </Typography>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Container>
                  </Box>
                  <Box>
                    <Container>
                      <Button
                        variant="contained"
                        fullWidth
                        className={classes.buttonStyle}
                        style={{ marginBottom: "16px" }}
                        onClick={addIncidentByAdmin}
                      >
                        Add Post
                      </Button>
                    </Container>
                  </Box>
                </div>
              );
            }
          })()}

          {/* iife for edit a post */}
          {(() => {
            if (post === "EditPost") {
              return (
                <div>
                  <Container maxWidth="xs">
                    <Grid container>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src={dummyimg}
                          alt=""
                          width="70%"
                          height="70px"
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src={dummyimg}
                          alt=""
                          width="70%"
                          height="70px"
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src={dummyimg}
                          alt=""
                          width="70%"
                          height="70px"
                        />
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                        <img
                          style={{ borderRadius: "10px" }}
                          src={dummyimg}
                          alt=""
                          width="70%"
                          height="70px"
                        />
                      </Grid>
                    </Grid>
                  </Container>
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Add title"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Description"
                        fullWidth
                        multiline
                        rows={4}
                      />
                    </Container>
                  </Box>
                  {/* here it will be map */}
                  <Box my={1}>
                    <Container>
                      <img src={mapimg} height="100px" width="400px" alt="" />
                    </Container>
                  </Box>
                  {/* end map */}
                  <Box my={1}>
                    {/* this will be a select element */}
                    <Container>
                      <FormControl className={classes.formControl}>
                        <InputLabel>Select Crime Type</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleChange}
                        >
                          <MenuItem value="Safety">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Safety
                            </Typography>
                          </MenuItem>
                          <MenuItem value="Crime">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Crime
                            </Typography>
                          </MenuItem>
                          <MenuItem value="Neighbourly moment">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Neighbourly moment
                            </Typography>
                          </MenuItem>
                          <MenuItem value="Missing Person">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Missing Person
                            </Typography>
                          </MenuItem>
                          <MenuItem value="Suspicious activity">
                            <Typography
                              variant="subtitle2"
                              style={{ color: MainCyan }}
                            >
                              Suspicious activity
                            </Typography>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Container>
                  </Box>
                  <Box>
                    <Container>
                      <Button
                        variant="contained"
                        fullWidth
                        className={classes.buttonStyle}
                        style={{ marginBottom: "16px" }}
                      >
                        Update Post
                      </Button>
                    </Container>
                  </Box>
                </div>
              );
            }
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostDialog;
