import React, { useState } from "react";
import mapimg from "../images/locationimage.png";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import dummyimg from "../images/download.jpg";
import axios from "axios";
import { addNewUser, UpdateUser, UpdateUserImageOnly } from "../Api/AdminUserApi";
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

  comment,
  member,
  refresh,
  setrefresh,
  ComparedDataToEdit,
}) => {
  const headers = {
    authorization: `Bearer ${Cookies.get("admin")}`,
  };

  const [state, setstate] = useState([]);
  const [openimg, setopenimg] = useState(false);
  const [file, setfile] = useState([]);

  // onChangeFile
  const onChangeFile = (e) => {
    setfile(e.target.files[0]);
  };
  // update image
  // 0.uploadImage
  const uploadImage = async (e, userid) => {
    e.preventDefault();
    const fdata = new FormData();
    fdata.append("image", file);
    const { data } = await axios.patch(
      `${UpdateUserImageOnly(userid)}`,
      fdata,
      {
        headers,
      }
    );
    if (data.success) {
      setrefresh(!refresh);
      toast.success("Image uploaded successfully");
      setopenimg(false);
    }
  };
  // 0.updateUserByAdmin
  const updateUserByAdmin = async (userId) => {
    try {
      const { data } = await axios.patch(`${UpdateUser(userId)}`, state, {
        headers,
      });
      // console.log(data);
      if (data.success) {
        toast.success("Data updated sucessfully");
        setopen(false);
        setrefresh(!refresh);
        setopenimg(true);
      }
    } catch (error) {
      console.log(error);
      toast.error("500 Internel Server error");
      setopen(false);
    }
  };
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
        setstate("");
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
                        onChange={(e) =>
                          setstate({ ...state, username: e.target.value })
                        }
                        placeholder="Username"
                        fullWidth
                        className={classes.input}
                        defaultValue={ComparedDataToEdit.username}
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
                        defaultValue={ComparedDataToEdit.firstname}
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
                        defaultValue={ComparedDataToEdit.lastname}
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
                        defaultValue={ComparedDataToEdit.code}
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
                        defaultValue={ComparedDataToEdit.email}
                        endAdornment={
                          <EmailOutlined
                            fontSize="small"
                            style={{ color: "grey" }}
                          />
                        }
                        className={classes.input}
                        code
                      />
                    </Container>
                  </Box>

                  <Box my={1}>
                    <Container>
                      <OutlinedInput
                        defaultValue={ComparedDataToEdit.phone}
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
                        defaultValue={ComparedDataToEdit.number}
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
                        defaultValue={ComparedDataToEdit.country}
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
                        defaultValue={ComparedDataToEdit.city}
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
                        defaultValue={ComparedDataToEdit.incidents}
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
                        defaultValue={ComparedDataToEdit.about}
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
                        defaultValue={ComparedDataToEdit.address}
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
                        fullWidth
                        style={{ borderRadius: 20 }}
                        onClick={getLocation}
                      >
                        Get User Location
                      </Button>
                    </Container>
                  </Box>

                  <Box>
                    <Container>
                      <Button
                        variant="contained"
                        fullWidth
                        className={classes.buttonStyle}
                        style={{ marginBottom: "16px" }}
                        onClick={() =>
                          updateUserByAdmin(ComparedDataToEdit._id)
                        }
                      >
                        Update User
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
      <Dialog open={openimg} onClose={() => setopenimg(false)}>
        <DialogTitle>
          Update an image
          <form
            encType="multipart/form-data"
            onSubmit={(e) => uploadImage(e, ComparedDataToEdit._id)}
          >
            <input type="file" name="image" onChange={onChangeFile} />
            <input type="submit" />
          </form>
        </DialogTitle>
      </Dialog>
    </div>
  );
};

export default AddAndEditMemberDialog;
