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
import toast from "react-hot-toast";
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

  const headers = {
    authorization: `Bearer ${Cookies.get("admin")}`,
  };
  useEffect(() => {
    getAllDataOfIncidents();
  }, [refresh]);

  // -1.delete a post,But first open the confirmation box
  const deleteApost = (postId) => {
    setdelet(true);
    setPostId(postId);
  };

  // 0.Get data from data base and show it
  const getAllDataOfIncidents = async () => {
    try {
      const { data } = await axios.get(`${getAllDataOfIncidentsToAdmin}`, {
        headers,
      });
      // console.log(data.data);
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
                            {/* location */}
                            <TableCell>
                              {val.location.lng}
                              {val.location.lat}
                            </TableCell>
                            {/* incident type */}
                            <TableCell>{val.type}</TableCell>
                            {/* incident type */}
                            <TableCell>
                              <Button onClick={() => setopenShowFiles(true)}>
                                Show Files
                              </Button>
                              <Grid container spacing={2}>
                                {val.files.map((val) => (
                                  <span>
                                    {/* make a dialog to show the files */}

                                    {
                                      <React.Fragment>
                                        {(() => {
                                          var imagefile =
                                            val.type.split("/")[0];
                                          if (imagefile === "image")
                                            return (
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
                                            );
                                        })()}

                                        {(() => {
                                          var videofile =
                                            val.type.split("/")[0];
                                          if (videofile === "video") {
                                            return (
                                              <video
                                                style={{
                                                  border: "1px solid red",
                                                  margin: 4,
                                                  padding: 1,
                                                }}
                                                src={`${imageUrl}/${val.path}`}
                                                width="50px"
                                                alt=""
                                              />
                                            );
                                          }
                                        })()}
                                      </React.Fragment>
                                    }
                                  </span>
                                ))}
                              </Grid>
                            </TableCell>
                            {/* time */}
                            <TableCell>{val.createdAt}</TableCell>
                            <TableCell align="right">
                              <ButtonGroup orientation="horizontal">
                                <Button
                                  size="small"
                                  className={classes.buttonStyle}
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="small"
                                  className={classes.buttonStyleOutlined}
                                  onClick={() => deleteApost(val._id)}
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

      {/* two cases here add/edit a post*/}
      <PostDialog post={post} open={open} setopen={setopen} />
    </div>
  );
};

export default Posts;
