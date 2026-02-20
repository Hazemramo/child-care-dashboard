import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer() {
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [isClosing, setIsClosing] = React.useState(false);

  // Remove this const when copying and pasting into your project.

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Sidebar />

      <div className="righ_side">
        <TopBar />
        {/* <div className="outlet">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quam pariatur magnam, nobis natus ratione consequuntur, libero dolorum iusto harum sapiente veritatis in optio deleniti beatae reprehenderit quis officia repellendus.</div> */}

        <div className="bottom">
          <Outlet />
        </div>
      </div>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
