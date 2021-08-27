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
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import PostDialog from "./PostDialog";
import {
  getAllDataOfIncidentsToAdmin,
  imageUrl,
  deleteIncident,
  getSpecificPostFiles,
  selectAstatusOfPost,
} from "../../Api/AdminIncidentsApi";
import {
  Add,
  CheckCircleOutline,
  ErrorOutline,
  PictureAsPdf,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { MainCyan, useStyles } from "../../Styles/Main.Styles";
import Navbar from "../Navbar";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
// just remember that now we going the make the dialog box separate for the posts and onword components
const Posts = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setopen] = React.useState(false);
  const [delet, setdelet] = React.useState(false);
  const [opentwo, setopentwo] = React.useState(false);
  const [post, setpost] = React.useState("NoSelection");
  const [state, setstate] = React.useState(undefined);
  const [PostId, setPostId] = React.useState(undefined);
  const [refresh, setrefresh] = React.useState(false);
  const [openShowFiles, setopenShowFiles] = React.useState(false);
  const [datafiles, setdatafiles] = React.useState(undefined);
  const [valueselect, setvalueselect] = React.useState("");

  const headers = {
    authorization: `Bearer ${Cookies.get("admin")}`,
  };

  useEffect(() => {
    getAllDataOfIncidents();
  }, [refresh]);
  //
  const onChangeStatusSelect = async (e, postId) => {
    setvalueselect(e.target.value);
    try {
      const { data } = await axios.post(
        `${selectAstatusOfPost(postId)}`,
        { status: e.target.value },
        {
          headers,
        }
      );
      if (data.success) {
        toast.success("Status Changed !");
        setrefresh(!refresh);
      }
    } catch (error) {
      toast.error("Internel server error");
    }
  };
  // -1.delete a post,But first open the confirmation box
  const deleteApost = (postId) => {
    setdelet(true);
    setPostId(postId);
  };
  // -0.get only Images and vidoes on a dialog api,
  const getImagesAndVidoes = async (postId) => {
    setopenShowFiles(true);
    try {
      const { data } = await axios.get(`${getSpecificPostFiles(postId)}`, {
        headers,
      });
      setdatafiles(data.data.files);
      console.log(data.data.files);
    } catch (error) {
      console.log(error);
    }
  };

  // 0.Get data from data base and show it
  const getAllDataOfIncidents = async () => {
    try {
      const { data } = await axios.get(`${getAllDataOfIncidentsToAdmin}`, {
        headers,
      });
      // console.log(data.data.map((val)=>val.location.coordinates.map((val)=>val)));
      var myData = data.data.map((val) =>
        val.location.coordinates.map((val) => val)
      );
      // console.log(myData[0][1])
      // console.log(myData[0][0])

      setstate(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  // 1.add a new post
  const addNewPost = () => {
    setpost("AddPost");
    setopen(true);
  };
  // 2.edit a new post
  const editPost = async () => {
    setpost("EditPost");
    setopen(true);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //   close both dialogs
  const closeBothDialogs = () => {
    setopen(false);
    setopentwo(false);
  };
  //open delete confirmation ok and in real delete it only;
  const openOneDialog = async () => {
    try {
      const { data } = await axios.delete(`${deleteIncident(PostId)}`, {
        headers,
      });

      if (data.success) {
        toast.success("Record deleted");
        setdelet(false);
        setopentwo(true);
        setrefresh(!refresh);
      }
    } catch (error) {
      console.log(error);
    }
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
                  Posts
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
                {/* pdf icon */}
                <IconButton>
                  <PictureAsPdf fontSize="small" style={{ color: MainCyan }} />
                </IconButton>
                {/* add icon */}
                <IconButton onClick={addNewPost}>
                  <Add fontSize="small" style={{ color: MainCyan }} />
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
                          UserId
                        </TableCell>
                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Id
                        </TableCell>
                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Title
                        </TableCell>

                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Description
                        </TableCell>

                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Location
                        </TableCell>
                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Incident Type
                        </TableCell>
                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Camera
                        </TableCell>
                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Time Post
                        </TableCell>

                        <TableCell
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Status
                        </TableCell>
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
                            {/* userid */}
                            <TableCell>Remains</TableCell>
                            {/* id */}
                            <TableCell>{val._id}</TableCell>
                            {/* title */}
                            <TableCell>{val.title}</TableCell>
                            {/* description */}

                            <TableCell>{val.description}</TableCell>
                            {/* location */}
                            <TableCell>
                              Lat: {val.location.coordinates[0]}
                              <br />
                              Lng: {val.location.coordinates[1]}
                            </TableCell>
                            {/* incident type */}
                            <TableCell>{val.type}</TableCell>

                            {/* show files */}
                            <TableCell>
                              <Button
                                size="small"
                                onClick={() => getImagesAndVidoes(val._id)}
                                variant="contained"
                                style={{ fontSize: 10 }}
                              >
                                Show Files
                              </Button>
                            </TableCell>
                            {/* time */}
                            <TableCell>{val.createdAt}</TableCell>
                            {/* select a status */}
                            {/* select a stauts */}
                            <TableCell>
                              <FormControl style={{ minWidth: 120 }}>
                                <InputLabel>Select status</InputLabel>
                                <Select
                                  onChange={(e) =>
                                    onChangeStatusSelect(e, val._id)
                                  }
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
                            <TableCell align="right">
                              <ButtonGroup orientation="horizontal">
                                <Button
                                  size="small"
                                  onClick={() => deleteApost(val._id)}
                                  className={classes.buttonStyle}
                                >
                                  Delete
                                </Button>
                                <Button
                                  size="small"
                                  className={classes.buttonStyleOutlined}
                                  onClick={editPost}
                                >
                                  Edit
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
      {/* dialog for show the files and imges */}
      <Dialog
        style={{ borderRadius: 0 }}
        open={openShowFiles}
        onClose={() => setopenShowFiles(false)}
      >
        <DialogTitle>Files</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {datafiles &&
              datafiles.map((val) => (
                <span>
                  {/* make a dialog to show the files */}

                  {
                    <React.Fragment>
                      {(() => {
                        var imagefile = val.type.split("/")[0];
                        if (imagefile === "image")
                          return (
                            <span>
                              <a href={`${imageUrl}/${val.path}`}>
                                <img
                                  src={`${imageUrl}/${val.path}`}
                                  width="50px"
                                  height="30px"
                                  alt=""
                                  style={{
                                    border: "1px solid blue",
                                    margin: 4,
                                    padding: 1,
                                    cursor: "pointer",
                                  }}
                                />
                              </a>
                            </span>
                          );
                      })()}

                      {(() => {
                        var videofile = val.type.split("/")[0];
                        if (videofile === "video") {
                          return (
                            <a href={`${imageUrl}/${val.path}`}>
                              <video
                                style={{
                                  border: "1px solid red",
                                  margin: 4,
                                  padding: 1,
                                  cursor: "pointer",
                                }}
                                src={`${imageUrl}/${val.path}`}
                                width="50px"
                                alt=""
                              />
                            </a>
                          );
                        }
                      })()}
                    </React.Fragment>
                  }
                </span>
              ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setopenShowFiles(false)}
            style={{ fontSize: 10 }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {/* two cases here add/edit a post*/}
      <PostDialog post={post} open={open} setopen={setopen} />
    </div>
  );
};

export default Posts;
