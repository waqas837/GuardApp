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
import AddAndEditDialog from "./AddAndEditMemberDialog"
import {
  CheckCircleOutline,
  ErrorOutline,
  PictureAsPdf,
  Search,
} from "@material-ui/icons";
import React from "react";
import { MainCyan, useStyles } from "../Styles/Main.Styles";
import Navbar from "./Navbar";

const UserList = () => {
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
                  User List
                </Typography>
                <FormControl className={classes.formControl}>
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
                {/* search icon */}
                <IconButton>
                  <Search fontSize="small" style={{ color: MainCyan }} />
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
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          FullName
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Email
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Phone No.
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Address
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          AboutUser
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Last Login
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{ color: MainCyan, fontWeight: "bold" }}
                        >
                          Status
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
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">
                          <Button
                            size="small"
                            className={classes.buttonStyleOutlined}
                          >
                            Block
                          </Button>
                        </TableCell>

                        <TableCell align="right">
                          <ButtonGroup orientation="horizontal">
                            <Button
                              size="small"
                              className={classes.buttonStyle}
                              onClick={()=>setopen(true)}
                            >
                              Edit
                            </Button>
                            <Button
                              size="small"
                              className={classes.buttonStyleOutlined}
                              onClick={() => setdelet(true)}
                            >
                              Delete
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
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">JohnDeo</TableCell>
                        <TableCell align="right">
                          <Button
                            size="small"
                            variant="contained"
                            className={classes.buttonStyle}
                          >
                            Approve
                          </Button>
                        </TableCell>

                        <TableCell align="right">
                          <ButtonGroup orientation="horizontal">
                            <Button
                              size="small"
                              className={classes.buttonStyle}
                              onClick={()=>setopen(true)}
                            >
                              Edit
                            </Button>
                            <Button
                              size="small"
                              className={classes.buttonStyleOutlined}
                              onClick={() => setopen(true)}
                            >
                              Delete
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
      <AddAndEditDialog user={true} open={open} setopen={setopen}/>
    </div>
  );
};

export default UserList;
