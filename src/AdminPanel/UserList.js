import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  getdummydata,
  DeletSingleUser,
  imageUploadForUsers,
  serverImagePath,
} from "../Api/AdminUserApi";
import toast, { Toaster } from "react-hot-toast";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableContainer,
  Paper,
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogActions,
  Menu,
} from "@material-ui/core";
import MainDialog from "./MainDialog";
import {
  Add,
  CheckCircleOutline,
  ErrorOutline,
  PictureAsPdf,
} from "@material-ui/icons";
import { MainCyan, useStyles } from "../Styles/Main.Styles";
import Navbar from "./Navbar";
import Cookies from "js-cookie";

const UserList = () => {
  const classes = useStyles();
  const [state, setstate] = useState(undefined);
  const [refresh, setrefresh] = useState(false);
  const [id, setid] = useState(undefined);
  const [ComparedData, setComparedData] = useState(undefined);
  const cookies = Cookies.get("admin");
  const headers = {
    authorization: `Bearer ${cookies}`,
  };
  useEffect(() => {
    fetchUsers();
  }, [refresh]);
  // const headers = {
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiKzkyIiwibnVtYmVyIjoiMzE2NTk4OTkyNCIsIm9wdFZhbGlkYXRpb24iOnRydWUsIm90cCI6Ijg4OTkiLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE2MjgyNTcxODJ9.G0P_VwmgB4Kicboya_ctGQa2H9rO2y36DJmyMJkDLzk",
  // };
  const deleteSingleUser = (id) => {
    setdelet(true);
    setid(id);
  };
  // Get all users
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${getdummydata}`, { headers });
      console.log(data.getUsers);
      setstate(data.getUsers);
    } catch (error) {
      console.log(error);
    }
  };
  const [age, setAge] = React.useState("");
  const [open, setopen] = React.useState(false);
  const [delet, setdelet] = React.useState(false);
  const [opentwo, setopentwo] = React.useState(false);
  const [valueselect, setvalueselect] = React.useState("");
  const [user, setuser] = React.useState("NoSelection");

  const [file, setfile] = useState([]);

  // onChangeFile
  const onChangeFile = (e) => {
    setfile(e.target.files[0]);
  };
  // console.log(file);
  // 0.uploadImage
  const uploadImage = async (e, userid) => {
    e.preventDefault();
    const fdata = new FormData();
    fdata.append("image", file);
    const { data } = await axios.patch(
      `${imageUploadForUsers(userid)}`,
      fdata,
      {
        headers,
      }
    );
    if (data.success) {
      setrefresh(!refresh);
      toast.success("Image uploaded successfully");
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // 0.add a user
  const AddUser = () => {
    setopen(true);
    setuser("AddUser");
  };

  // 1.edit a user
  const editUser = (dataId) => {
    setopen(true);
    setuser("EditUser");
    const compareData = state.find((val) => val._id === dataId);
    console.log(compareData);
    setComparedData(compareData);
  };
  //   close both dialogs
  const closeBothDialogs = () => {
    setopen(false);
    setopentwo(false);
  };
  //open only one dialog
  const openOneDialog = async () => {
    setdelet(false);
    try {
      const { data } = await axios.delete(`${DeletSingleUser(id)}`, {
        headers,
      });
      // console.log(data);
      if (data.success) {
        setopen(false);
        setopentwo(true);
        setrefresh(!refresh);
      } else if (!data.success) {
        toast.error(`${data.message}`);
        setopen(false);
      }
    } catch (error) {
      toast.error("Data delete failed!");
      console.log(error);
    }
  };
  // onChangeStatusSelect
  const onChangeStatusSelect = (e) => {
    setvalueselect(e.target.value);
  };
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <Toaster />
      <Box mt={5} className={classes.resposiveFromSide}>
        <Container maxWidth="md">
          {/* line 0 */}
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Box display="flex" justifyContent="space-evenly">
                <Typography style={{ fontWeight: "bold" }} variant="h6">
                  User List
                </Typography>
                <FormControl className={classes.formControl2}>
                  <InputLabel>Select Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                  >
                    <MenuItem value="All the Time">
                      <Typography
                        variant="subtitle2"
                        style={{ color: MainCyan }}
                      >
                        All the Time
                      </Typography>
                    </MenuItem>
                    <MenuItem value="One the Time">
                      <Typography
                        variant="subtitle2"
                        style={{ color: MainCyan }}
                      >
                        One the Time
                      </Typography>
                    </MenuItem>
                    <MenuItem value="Any the Time">
                      <Typography
                        variant="subtitle2"
                        style={{ color: MainCyan }}
                      >
                        Any Time
                      </Typography>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Box textAlign="right">
                {/* add new user icon */}
                <IconButton onClick={AddUser}>
                  <Add fontSize="small" style={{ color: MainCyan }} />
                </IconButton>

                {/* pdf icon */}
                <IconButton>
                  <PictureAsPdf fontSize="small" style={{ color: MainCyan }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          {/* line for the table */}
          <Box mt={2}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Username
                        </TableCell>
                        <TableCell
                          align="center"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          FirstName
                        </TableCell>

                        <TableCell
                          align="center"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Last Name
                        </TableCell>

                        <TableCell
                          align="center"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Email
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Phone
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Code
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Country
                        </TableCell>
                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          About
                        </TableCell>

                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          City
                        </TableCell>

                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Address
                        </TableCell>

                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Image
                        </TableCell>

                        <TableCell
                          align="center"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Status
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Incidents
                        </TableCell>

                        {/* <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Location
                        </TableCell> */}

                        <TableCell
                          align="center"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* row */}
                      {state &&
                        state.map((val) => (
                          <TableRow>
                            <TableCell align="right">{val.username}</TableCell>
                            <TableCell align="right">{val.firstname}</TableCell>
                            <TableCell align="right">{val.lastname}</TableCell>
                            <TableCell align="right">{val.email}</TableCell>
                            <TableCell style={{ fontSize: "10px" }}>
                              {val.phone}
                            </TableCell>
                            <TableCell style={{ fontSize: "10px" }}>
                              {val.code}
                            </TableCell>
                            <TableCell align="right">{val.country}</TableCell>
                            <TableCell align="right">{val.about}</TableCell>
                            <TableCell align="right">{val.city}</TableCell>
                            <TableCell align="right">{val.address}</TableCell>
                            <TableCell align="center">
                              {val.image !== "placeholder.jpg" ? (
                                <img
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: 30,
                                  }}
                                  src={`${serverImagePath}${val.image}`}
                                  alt=""
                                />
                              ) : (
                                <form
                                  encType="multipart/form-data"
                                  onSubmit={(e) => uploadImage(e, val._id)}
                                >
                                  <input
                                    type="file"
                                    name="image"
                                    onChange={onChangeFile}
                                  />
                                  <input type="submit" />
                                </form>
                              )}
                            </TableCell>
                            {/* <TableCell align="right">{val.location}</TableCell> */}

                            <TableCell>
                              <FormControl style={{ minWidth: 120 }}> 
                                <InputLabel>Select status</InputLabel>
                                <Select
                                  onChange={onChangeStatusSelect}
                                  value={valueselect}
                                >
                                  <MenuItem value={"verified"} button>
                                    Verify
                                  </MenuItem>
                                  <MenuItem value={"unverified"} button>
                                    Unverify
                                  </MenuItem>
                                  <MenuItem value={"deleted"} button>
                                    Delete
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </TableCell>
                            {/* <TableCell align="right">{val.type}</TableCell> */}
                            <TableCell align="center">
                              {val.incidents}
                            </TableCell>
                            <TableCell align="right">
                              <ButtonGroup orientation="horizontal">
                                <Button
                                  size="small"
                                  className={classes.buttonStyle}
                                  onClick={() => editUser(val._id)}
                                >
                                  Edit
                                </Button>
                                <Button
                                  size="small"
                                  className={classes.buttonStyleOutlined}
                                  onClick={() => deleteSingleUser(val._id)}
                                >
                                  Delete
                                </Button>
                              </ButtonGroup>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* dialog for delete confirmation */}
      <Dialog open={delet} onClose={() => setdelet(false)}>
        <Box pl={25} pr={25}></Box>
        <Box textAlign="center">
          <ErrorOutline
            style={{
              fontSize: "100px",
              color: "rgb(240,190,148)",
              fontWeight: "lighter",
              marginTop: "10px",
            }}
          />
        </Box>
        <DialogContent>
          <Box textAlign="center">
            <Typography variant="h6">Confirm Delete</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            style={{ background: "grey", marginBottom: "10px" }}
            variant="contained"
            size="small"
            onClick={() => setdelet(false)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            style={{
              background: "rgb(254,61,67)",
              color: "white",
              marginBottom: "10px",
            }}
            onClick={openOneDialog}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>

      {/* pressed ok and record deleted */}
      <Dialog open={opentwo} onClose={() => setopentwo(false)}>
        <Box pl={25} pr={25}></Box>
        <Box textAlign="center">
          <CheckCircleOutline
            style={{
              fontSize: "100px",
              color: "rgb(170,219,133)",
              fontWeight: "lighter",
              marginTop: "10px",
            }}
          />
        </Box>
        <DialogContent>
          <Box textAlign="center">
            <Typography variant="h6">Record deleted</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={closeBothDialogs}
            style={{ marginBottom: "10px" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/*dialog */}
      <MainDialog
        user={user}
        open={open}
        setopen={setopen}
        refresh={refresh}
        setrefresh={setrefresh}
        ComparedDataToEdit={ComparedData}
      />
    </div>
  );
};

export default UserList;
