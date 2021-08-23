import React, { useState } from "react";
import mapimg from "../images/locationimage.png";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import dummyimg from "../images/download.jpg";
import axios from "axios";
import { addNewUser,imageUploadForUsers } from "../AdminApi.js";
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
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";
import { EmailOutlined, HighlightOff, LocationOn } from "@material-ui/icons";
import { MainCyan, useStyles } from "../Styles/Main.Styles";
// just remember that: if postCheck is true it will add a post ,else edit a post
const AddAndEditMemberDialog = ({
  open,
  setopen,
  user,
  post,
  comment,
  member,
  refresh,
  setrefresh,
}) => {
  const headers = {
    authorization: `Bearer ${Cookies.get("admin")}`,
  };

  const [state, setstate] = useState([]);
  
  // 1.Admin adding a new user
  const AddUserByAdmin = async () => {
    try {
      const { data } = await axios.post(`${addNewUser}`, state, {
        headers,
      });
      console.log(data);
      if (data.success) {
        setrefresh(!refresh);
        toast.success("User data added successfully");
        setopen(false);
      }
      // console.log(data);
    } catch (e) {
      toast.error("Please Fill the fields with correct format and try again!");
      setopen(false);
      throw e;
    }
  };

  const classes = useStyles();
  // console.log(postCheck);
  const [age, setAge] = React.useState("");
  
  // select
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //getLocation
  const getLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setstate({
          ...state,
          location: {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          },
        });
      });
      toast.success("Location saved go to next step!");
    }
  };
  return (
    <div>
      <Toaster />
      {/* main dialog box */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>
          {(() => {
            if (user === "EditUser") {
              return (
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Edit User
                </Typography>
              );
            }
            if (user === "AddUser") {
              return (
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Add User
                </Typography>
              );
            }
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
            if (comment === "EditComment") {
              return (
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Edit Comment
                </Typography>
              );
            }
            if (member === "AddMember") {
              return (
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Add Member
                </Typography>
              );
            }
            if (member === "EditMember") {
              return (
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  Edit Member
                </Typography>
              );
            }
          })()}

          {/* close icon button common in all*/}
          <Box textAlign="right" style={{ marginTop: "-40px" }}>
            <IconButton onClick={() => setopen(false)}>
              <HighlightOff style={{ color: MainCyan }} />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {/* iife for the edit user */}
          {(() => {
            if (user === "EditUser") {
              return (
                <div>
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Username"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Fullname"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Email address"
                        fullWidth
                        endAdornment={
                          <EmailOutlined
                            fontSize="small"
                            style={{ color: "grey" }}
                          />
                        }
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Phone No"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="About Me"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>
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
                </div>
              );
            }
          })()}
          {/* iffee for add user */}
          {(() => {
            if (user === "AddUser") {
              return (
                <div>
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, username: e.target.value })
                        }
                        placeholder="Username"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, firstname: e.target.value })
                        }
                        placeholder="FirstName"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, lastname: e.target.value })
                        }
                        placeholder="Last Name"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, code: e.target.value })
                        }
                        placeholder="Code"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, email: e.target.value })
                        }
                        placeholder="Email address"
                        fullWidth
                        endAdornment={
                          <EmailOutlined
                            fontSize="small"
                            style={{ color: "grey" }}
                          />
                        }
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, phone: e.target.value })
                        }
                        placeholder="Phone No"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, number: e.target.value })
                        }
                        placeholder="Number"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, country: e.target.value })
                        }
                        placeholder="Country Name"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, city: e.target.value })
                        }
                        placeholder="City Name"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        type="number"
                        onChange={(e) =>
                          setstate({ ...state, incidents: e.target.value })
                        }
                        placeholder="Incidents"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, about: e.target.value })
                        }
                        placeholder="About"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        onChange={(e) =>
                          setstate({ ...state, address: e.target.value })
                        }
                        placeholder="Address"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <Button
                        startIcon={
                          <LocationOn
                            fontSize="small"
                            style={{ color: MainCyan }}
                          />
                        }
                        variant="outlined"
                        onClick={getLocation}
                        fullWidth
                        style={{ borderRadius: 20 }}
                      >
                        Get User Location
                      </Button>
                    </Container>
                  </Box>

                  <Box>
                    <Container>
                      <Button
                        onClick={AddUserByAdmin}
                        variant="contained"
                        fullWidth
                        className={classes.buttonStyle}
                        style={{ marginBottom: "16px" }}
                      >
                        Add User
                      </Button>
                    </Container>
                  </Box>
                </div>
              );
            }
          })()}

          {/* iife for add a post */}
          {(() => {
            if (post === "AddPost") {
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
                        Add Post
                      </Button>
                    </Container>
                  </Box>
                </div>
              );
            }
          })()}
          {/* iife for edit member */}
          {(() => {
            if (member === "EditMember") {
              return (
                <div>
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Username"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Fullname"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Email address"
                        fullWidth
                        endAdornment={
                          <EmailOutlined
                            fontSize="small"
                            style={{ color: "grey" }}
                          />
                        }
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Phone No"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="About Me"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>
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
                  <Box>
                    <Container>
                      <Button
                        variant="contained"
                        fullWidth
                        className={classes.buttonStyle}
                        style={{ marginBottom: "16px" }}
                      >
                        Update Member
                      </Button>
                    </Container>
                  </Box>
                </div>
              );
            }
          })()}
          {/* iife for edit member */}
          {(() => {
            if (member === "AddMember") {
              return (
                <div>
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Username"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Fullname"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Email address"
                        fullWidth
                        endAdornment={
                          <EmailOutlined
                            fontSize="small"
                            style={{ color: "grey" }}
                          />
                        }
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Phone No"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="About Me"
                        fullWidth
                        className={classes.input}
                      />
                    </Container>
                  </Box>
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
                  <Box>
                    <Container>
                      <Button
                        variant="contained"
                        fullWidth
                        className={classes.buttonStyle}
                        style={{ marginBottom: "16px" }}
                      >
                        Add Member
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
          {/* iffie for edit the comments */}
          {(() => {
            if (comment === "EditComment") {
              return (
                <div>
                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        placeholder="Update comment"
                        fullWidth
                        multiline
                        rows={3}
                      />
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
                        Update comment
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

export default AddAndEditMemberDialog;
