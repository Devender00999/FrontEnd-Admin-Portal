//this stylesheet is based on material ui css styling

import { fade, makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: "#f9fbfd",
    color: "#7c8798",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
     
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  //toolbar: theme.mixins.toolbar,
  toolbar:{
    height:'40px',
    [theme.breakpoints.up("sm")]:{
      height:'50px',
    }
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#212a2f",
    color: "#bdbdbd",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width:"100%",
  },

  // Styles below this are for SideBar.jsx

  grow: {
    flexGrow: 1,
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  search: {
    position: "relative",
    borderRadius: "60px",
    backgroundColor: "white",
    boxShadow:'0 2px 9px 0 rgba(169,184,200,.2)',
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(3),
      width: "40rem",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width:"100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  hoverlight: {
    color: "#adb5bd",
    "&:hover": {
      color: "white",
      textDecoration:"none",
    },
    '& span':{
      '&:hover':{
        transition:'transform 0.1s ease-in-out',
        transform:'Scale(1.03)'
      }
    }
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  toptext:{
    textAlign:'center',
    fontSize:'2rem',
    color:'#677380',
    transition:'color 0.5s ease-out',
    "&:hover":{
        color:'white',
        textDecoration:"none",
    }
  },
  removebg:{
    '&:hover':{
      background:'none',
    }
  }
}));

export default useStyles;
