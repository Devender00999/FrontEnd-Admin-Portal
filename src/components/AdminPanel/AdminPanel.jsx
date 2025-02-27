import React from "react";
//Don't remove AppBar
// eslint-disable-next-line
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./AdminPanelStyle";
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Route,
} from "react-router-dom";
import SideBar from "./SideBar";
//stylesProvider inject our custom css first on a wrap component
import { StylesProvider } from "@material-ui/core/styles";
import AdminRoutes from "./AdminRoutes";
import { Row, Col } from "react-bootstrap";
import DashCard from "../Common/DashCard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ViewCarouselIcon from "@material-ui/icons/ViewCarousel";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LinkIcon from "@material-ui/icons/Link";
import EventIcon from "@material-ui/icons/Event";

const cards = [
  {
    heading: "Top Notice",
    bgcolor: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)",
    icon: (
      <NotificationsIcon
        className="d-block"
        style={{ width: "4rem", height: "4rem" }}
      />
    ),
    LinkTo: "UpdateTopNotice",
  },
  {
    heading: "Carousel",
    bgcolor:
      "radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)",
    icon: (
      <ViewCarouselIcon
        className="d-block"
        style={{ width: "4rem", height: "4rem" }}
      />
    ),
    LinkTo: "Carousel",
  },
  {
    heading: "Notices/Alerts",
    bgcolor: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
    icon: (
      <ListAltIcon
        className="d-block"
        style={{ width: "4rem", height: "4rem" }}
      />
    ),
    LinkTo: "Notices",
  },
  {
    heading: "Important Links",
    bgcolor: "linear-gradient(to right,#fe9365,#feb798)",
    icon: (
      <LinkIcon className="d-block" style={{ width: "4rem", height: "4rem" }} />
    ),
    LinkTo: "ImportantLinks",
  },
  {
    heading: "Events",
    bgcolor: "linear-gradient(to right,#fe5d70,#fe909d)",
    icon: (
      <EventIcon
        className="d-block"
        style={{ width: "4rem", height: "4rem" }}
      />
    ),
    LinkTo: "Events",
  },
];
function AdminPanel(props) {
  const classes = useStyles();
  const { path, url } = useRouteMatch();
  console.log(path, url);
  return (
    <Router>
      <StylesProvider injectFirst>
        <div className={classes.root}>
          <CssBaseline />
          {/* <SideBar /> */}
          <SideBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              <Route exact path={path}>
                <Row>
                  {cards.map((card, index) => (
                    <Col
                      xs={"12"}
                      sm={"6"}
                      md={"4"}
                      className="my-3"
                      key={index}
                    >
                      <DashCard
                        heading={card.heading}
                        bgcolor={card.bgcolor}
                        icon={card.icon}
                        LinkTo={card.LinkTo}
                      />
                    </Col>
                  ))}
                </Row>
              </Route>
              <Route path={`${path}/:params`}>
                <AdminRoutes />
              </Route>
            </Switch>
          </main>
        </div>
      </StylesProvider>
    </Router>
  );
}

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   container: PropTypes.any,
// };

export default AdminPanel;
