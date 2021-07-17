import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import {
  AssignmentLate,
  Dashboard,
  LocalActivity,
  NotificationsActive,
  Person,
  FormatListBulleted,
  Comment,
  FindInPage,
} from "@material-ui/icons";
import { MainCyan } from "../Styles/Main.Styles";
import { grey } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  drawer: {
    marginTop: "61px",
    width: "50px",
  },
  marginListItems: {
    marginBottom: "10px",
  },
  activeLink: {
    background: grey[200],
    borderLeft: `3px solid ${MainCyan}`,
  },
}));
const FixedDrawer = () => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Drawer
          variant="permanent"
          anchor="left"
          // overide the css of drawer
          classes={{ paper: classes.drawer }}
        >
          <List>
            {/* item 1 */}
            <Tooltip title="Dashboard" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <Dashboard fontSize="small" />
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </Tooltip>

            {/* item 2 */}
            <Tooltip title="Search User" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/searchUser"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <Person fontSize="small" />
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </Tooltip>
            {/* item 3 */}
            <Tooltip title="User List" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/userlist"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <FormatListBulleted fontSize="small" />
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </Tooltip>
            {/* item 4 */}
            <Tooltip title="Posts" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/posts"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <LocalActivity fontSize="small" />
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </Tooltip>
            {/* item 5*/}
            <Tooltip title="Incidents" arrow>
              <ListItem
                button
                className={classes.marginListItems}
                component={NavLink}
                to="/incidents"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <FindInPage fontSize="small" />
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </Tooltip>
            {/* item 6 */}
            <Tooltip title="Alerts" arrow>
              <ListItem
                button
                component={NavLink}
                to="/alerts"
                exact
                activeClassName={classes.activeLink}
                className={classes.marginListItems}
              >
                <ListItemIcon>
                  <AssignmentLate fontSize="small" />
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </Tooltip>
            {/* Comment item 7 */}
            <Tooltip title="Comments" arrow>
              <ListItem
                button
                component={NavLink}
                className={classes.marginListItems}
                to="/comments"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <Comment fontSize="small" />
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </Tooltip>
            {/* Comment item 8 */}
            <Tooltip title="Notifications" arrow>
              <ListItem
                button
                component={NavLink}
                className={classes.marginListItems}
                to="/notifications"
                exact
                activeClassName={classes.activeLink}
              >
                <ListItemIcon>
                  <NotificationsActive fontSize="small" />
                </ListItemIcon>
                <ListItemText />
              </ListItem>
            </Tooltip>
          </List>
        </Drawer>
      </Container>
    </div>
  );
};

export default FixedDrawer;
