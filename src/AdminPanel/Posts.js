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
  Input,
} from "@material-ui/core";
import MainDialog from "./MainDialog";
import {
  Add,
  CheckCircleOutline,
  ErrorOutline,
  PictureAsPdf,
} from "@material-ui/icons";
import React from "react";
import { MainCyan, useStyles } from "../Styles/Main.Styles";
import dummyimg from "../images/download.jpg"
import Navbar from "./Navbar";

const Posts = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setopen] = React.useState(false);
  const [delet, setdelet] = React.useState(false);
  const [opentwo, setopentwo] = React.useState(false);
  const [post, setpost] = React.useState("NoSelection");
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
  //open only one dialog
  const openOneDialog = () => {
    setdelet(false);
    setopentwo(true);
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
                  <Add
                    fontSize="small"
                    style={{ color: MainCyan }} 
                  />
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
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Id
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Title
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Location
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Incident Type
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Camera
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Time of Post
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* row */}
                      <TableRow>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">
                          <Grid container>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <img style={{borderRadius:"10px"}}  src={dummyimg} alt=""  width="40px" height="40px" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <img style={{borderRadius:"10px"}} src={dummyimg} alt=""  width="40px" height="40px" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <img style={{borderRadius:"10px"}} src={dummyimg} alt=""  width="40px" height="40px" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <img style={{borderRadius:"10px"}} src={dummyimg} alt=""  width="40px" height="40px" />
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell align="right">JohnDeo</TableCell>

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
                              onClick={() => setdelet(true)}
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
                      {/* row */}
                      <TableRow>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <img style={{borderRadius:"10px"}}  src={dummyimg} alt=""  width="40px" height="40px" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <img style={{borderRadius:"10px"}}  src={dummyimg} alt=""  width="40px" height="40px" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <img style={{borderRadius:"10px"}}  src={dummyimg} alt=""  width="40px" height="40px" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <img style={{borderRadius:"10px"}}  src={dummyimg} alt=""  width="40px" height="40px" />
                            </Grid>
                          </Grid>
                        </TableCell>
                        <TableCell align="right">JohnDeo</TableCell>

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
                              onClick={() => setdelet(true)}
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
      {/* edit user dialog */}
      {/* if postCheck is true:add a post , else it will edit a post */}
      <MainDialog
        post={post}
        open={open}
        setopen={setopen}
      />
    </div>
  );
};

export default Posts;
