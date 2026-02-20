import { IconButton, InputBase, Stack } from "@mui/material";
import React from "react";
import "../index.css";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // @ts-ignore
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <div className="topbar">
      <div className="search_sec">
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>

      <div className="righ_sec">
        <Stack direction={"row"}>
          <IconButton  aria-label="delete">
            <EmailIcon />
          </IconButton>
          <IconButton  sx={{ marginRight: 2 }}   aria-label="delete">
            <NotificationsActiveIcon />
          </IconButton>
          <div className="profile">
            <div className="profile_img">
              <img src="/../src/assets/Baby-one.png" alt="" />
            </div>
            <div className="profile_user">
              <div className="one">Baby one</div>
              <div className="two">baby0ne@gmail.com</div>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}
