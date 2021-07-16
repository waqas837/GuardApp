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

            {/* item 2 */}
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
            {/* item 3 */}
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
            {/* item 4 */}
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
            {/* item 5*/}
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
            {/* item 6 */}
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
            {/* Comment item 7 */}
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
            {/* Comment item 8 */}
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
          </List>
        </Drawer>
      </Container>
    </div>
  );
};

export default FixedDrawer;
