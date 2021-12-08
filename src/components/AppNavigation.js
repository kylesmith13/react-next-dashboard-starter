import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
Hidden,
Box,
IconButton,
Typography,
List,
ListItem,
ListItemIcon,
ListItemText,
} from "@material-ui/core";

import Sushi from "./Sushi";

import {
  DashboardOutlined,
  FastfoodOutlined} from "@material-ui/icons";

import { useRouter } from "next/router";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    // "& > *": {
    //   paddingLeft: theme.spacing(3),
    // },
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function AppNavigation() {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const [address, setAddress] = React.useState("");

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <div classes={classes.root}>
      <div className={classes.toolbar}>
        <Hidden smUp implementation="css">
          <Box display="flex" alignItems="center" py={0.5}>
            <IconButton edge={false} onClick={() => router.push("/")}>
              <Sushi />
            </IconButton>
            <Typography variant="subtitle1" color="textPrimary" noWrap>
              Sushi Analyticsals
            </Typography>
          </Box>
        </Hidden>
      </div>
      <List
          className={classes.list}
          // aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader component="div" id="nested-list-subheader">
          //     Overview
          //   </ListSubheader>
          // }
          direction="horizontal"
        >
        <ListItem
            key="/"
            button
            selected={router.pathname === "/"}
            onClick={() => router.push("/")}
          >
            <ListItemIcon>
              <DashboardOutlined />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

        <ListItem
          key="/bar"
          button
          selected={router.pathname === "/bar"}
          onClick={() => router.push("/bar")}
        >
          <ListItemIcon>
            <FastfoodOutlined />
          </ListItemIcon>
          <ListItemText primary="Bar" />
          {/* {open ? <ExpandLess /> : <ExpandMore />} */}
        </ListItem>
      </List>
    </div>
  )
}