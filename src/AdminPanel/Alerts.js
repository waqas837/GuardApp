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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  OutlinedInput,
} from "@material-ui/core";
import dummyimg from "../images/download.jpg"
import {
  Add,
  CheckCircleOutline,
  ErrorOutline,
  HighlightOff,
  PictureAsPdf,
} from "@material-ui/icons";
import React from "react";
import { MainCyan, useStyles } from "../Styles/Main.Styles";
import Navbar from "./Navbar";

const Alerts = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setopen] = React.useState(false);
  const [delet, setdelet] = React.useState(false);
  const [opentwo, setopentwo] = React.useState(false);
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
                  Alerts
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
                <IconButton onClick={() => setopen(true)}>
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
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Camera
                        </TableCell>
                        <TableCell
                         
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                           Post Time
                        </TableCell>
                        <TableCell
                          align="left"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* row */}
                      <TableRow>
                        <TableCell align="right">John001</TableCell>
                        <TableCell align="right">001</TableCell>
                        <TableCell align="right">John@gmail.com</TableCell>
                        <TableCell style={{fontSize:"10px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aliquid, error commodi expedita, sit tempore recusandae eum illo labore ipsa modi ea.
                        </TableCell>
                        <TableCell style={{fontSize:"10px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aliquid, error commodi expedita, sit tempore recusandae eum illo labore ipsa modi ea.
                        </TableCell>
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
                        <TableCell  >00:00 AM</TableCell>

                        <TableCell align="right">
                          <Button
                            size="small"
                            className={classes.buttonStyleOutlined}
                            onClick={() => setdelet(true)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                      {/* row */}
                      <TableRow>
                      <TableCell align="right">John001</TableCell>
                        <TableCell align="right">001</TableCell>
                        <TableCell align="right">John@gmail.com</TableCell>
                        <TableCell style={{fontSize:"10px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aliquid, error commodi expedita, sit tempore recusandae eum illo labore ipsa modi ea.
                        </TableCell>
                        <TableCell style={{fontSize:"10px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, aliquid, error commodi expedita, sit tempore recusandae eum illo labore ipsa modi ea.
                        </TableCell>
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
                        <TableCell  >00:00 AM</TableCell>

                        <TableCell align="right">
                          <Button
                            size="small"
                            className={classes.buttonStyleOutlined}
                            onClick={() => setdelet(true)}
                          >
                            Delete
                          </Button>
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
      {/* alert has its own dialog */}
      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle>
          <Typography style={{ fontWeight: "bold" }} variant="h6">
            Send Alert
          </Typography>

          {/* close icon button */}
          <Box textAlign="right" style={{ marginTop: "-40px" }}>
            <IconButton onClick={() => setopen(false)}>
              <HighlightOff style={{ color: MainCyan }} />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {/* input */}
          <Box my={1}>
            <Container>
              <OutlinedInput
                placeholder="Alert Title"
                fullWidth
                className={classes.input}
              />
            </Container>
          </Box>
          {/* input */}
          <Box my={1}>
            <Container>
              <OutlinedInput
                placeholder="Description"
                fullWidth
                multiline
                rows={5}
              />
            </Container>
          </Box>

          {/* button */}
          <Box>
            <Container>
              {/* we can put a condition also on behalf of different update member/user data please do it at last */}
              <Button
                variant="contained"
                fullWidth
                className={classes.buttonStyle}
                style={{ marginBottom: "16px" }}
              >
                Send
              </Button>
            </Container>
          </Box>
        </DialogContent>
        {/* <DialogActions></DialogActions> */}
      </Dialog>
    </div>
  );
};

export default Alerts;
