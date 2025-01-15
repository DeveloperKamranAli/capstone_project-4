import React from "react"; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import MicIcon from "@mui/icons-material/Mic";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Logo from "../../assets Pic/logo.svg";
import { Collapse, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import WatchIcon from "@mui/icons-material/Watch";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

const popularLists = [
  { name: "Best Smart Watches" },
  { name: "Best Smart Watches under 5000" },
  { name: "Best Smart Watches for Women" },
  { name: "Best Watches Under 8000" },
  { name: "Best Watches Under 13000" },
  { name: "Best 5G phones" },
  { name: "Best Camera phones" },
  { name: "Best PUBG Mpbiles" },
];

// Category Data
const drawerCategories = [
  {
    name: "Mobile",
    icon: <MobileScreenShareIcon />,
    subcategories: [
      "Apple",
      "Samsung",
      "Xiaomi",
      "Infinix",
      "Oppo",
      "Vivo",
      "Realme",
    ],
  },
  {
    name: "Smart Watches",
    icon: <WatchIcon />,
    subcategories: [
      "Apple Watch",
      "Samsung Watch",
      "Xiaomi Mi Band",
      "Faster",
      "Yolo",
    ],
  },
  {
    name: "Wireless Earbuds",
    icon: <HeadphonesIcon />,
    subcategories: [
      "Airox",
      "Anker",
      "assorted",
      "Audionic",
      "Lenovo",
      "Ronin",
    ],
  },
  {
    name: "Power Banks",
    icon: <BatteryChargingFullIcon />,
    subcategories: ["Baseus", "Faster", "Joyroom", "Xiaomi", "More Brands"],
  },
];

const MainNavigation = () => (
  <Box className="sb-nav-box sb-row" sx={{ padding: 0 }}>
    <Typography
      sx={{
        marginBottom: 1,
        marginLeft: 2,
        color: "gray",
        fontWeight: 400,
      }}
    >
      MAIN NAVIGATION
    </Typography>
    <List sx={{ padding: 0 }}>
      <ListItem>
        <ListItemText primary="About Us" />
      </ListItem>
      <ListItem>
        <ListItemText primary="FAQs" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Contact" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Privacy Policy" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Terms & Conditions" />
      </ListItem>
    </List>
  </Box>
);

const Header = () => {
  const [expandedCategory, setExpandedCategory] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [userName, setUserName] = React.useState(""); 
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const location = useLocation();
  const Navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    setExpandedCategory(
      expandedCategory === categoryName ? null : categoryName
    );
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  React.useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    const storedFirstName = localStorage.getItem("userfirstName");

    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
      setUserName(storedFirstName || ""); 
    }
  }, [location]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="background-color d-flex justify-content-between">
            <Box>
              <Button className="text-white" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                  className="container background-color"
                  style={{ width: 300 }}
                >
                  <Box>
                    <Typography className="d-flex flex-column justify-content-center h-50 mb-5 mt-4">
                      <img
                        className="w-50 mb-2"
                        src={Logo}
                        onClick={() => Navigate("/")}
                        alt="Logo"
                      />
                      <Button
                        className="btn-login border w-50 me-3 px-3 mb-2 bg-white"
                        style={{ color: "rgb(72,175,255)" }}
                      >
                        <Link to="/LoginPage" className="text-decoration-none">
                          Log in
                        </Link>
                      </Button>
                      <Typography className="text-white mb-2">
                        <LocationOnIcon />{" "}
                        <Link
                          to="TrackOrderPage"
                          className="text-decoration-none text-white"
                        >
                          Track my order
                        </Link>{" "}
                      </Typography>
                      <Typography className="text-white">
                        <TextSnippetIcon /> Launch a complaint
                      </Typography>
                    </Typography>
                  </Box>
                </Box>

                <List>
                  {drawerCategories.map((category) => (
                    <div key={category.name}>
                      <ListItem
                        button
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        <ListItemIcon>{category.icon}</ListItemIcon>
                        <ListItemText primary={category.name} />
                      </ListItem>

                      <Divider
                        sx={{
                          borderColor: "#4da6ff",
                          my: 1,
                          width: "100%",
                          margin: "0 auto",
                        }}
                      />

                      <Collapse
                        in={expandedCategory === category.name}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {category.subcategories.map((subcategory) => (
                            <ListItem
                              className="bg-body-tertiary"
                              key={subcategory}
                              sx={{ pl: 4 }}
                            >
                              <ListItemText primary={subcategory} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </div>
                  ))}
                </List>

                <Typography
                  variant="subtitle1"
                  sx={{ padding: "8px 16px", backgroundColor: "#f0f5ff" }}
                >
                  POPULAR LISTS
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "8px 16px",
                  }}
                >
                  {popularLists.map((item, index) => (
                    <a
                      key={index}
                      href={item.link || "#"}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          color: "rgb(72,175,255)",
                          borderColor: "rgb(72,175,255)",
                          "&:hover": {
                            backgroundColor: "rgb(72,175,255)",
                            color: "white",
                            borderColor: "rgb(72,175,255)",
                          },
                          padding: "8px 12px",
                        }}
                      >
                        {item.name}
                      </Button>
                    </a>
                  ))}
                </Box>

                <MainNavigation />
              </Drawer>
            </Box>
            <Typography className="me-1">
              <img
                style={{ width: "100px" }}
                src={Logo}
                onClick={() => Navigate("/")}
                alt="Logo"
              />
            </Typography>

            <Box
              className="position-relative d-flex justify-content-center"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Typography className="input border-0">
                <input
                  className="input-text ps-1 w-100 py-1 rounded-2 border-0 pe-5"
                  type="text"
                  placeholder="Search.."
                />
              </Typography>
              <Typography
                className="position-absolute input border-0 mt-1"
                style={{ marginLeft: "20vh", color: "rgb(72,175,255)" }}
              >
                <MicIcon />
              </Typography>
            </Box>

            <Box className="d-md-none d-none d-md-block d-lg-block">
              {isLoggedIn ? (
                <Box className="btn-profile me-2 px-2">
                  <Box>
                    <IconButton
                      className="text-white"
                      onClick={handleMenu}
                    >
                      <AccountCircle />
                    </IconButton>
                    <span className="text-white">{userName}</span>
                    <Menu
                      className="mt-4"
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link
                          to="/ProfileSection"
                          className="text-decoration-none text-dark"
                        >
                          My Account
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/TrackOrder"
                          className="text-decoration-none text-dark"
                        >
                          Track my Order
                        </Link>
                      </MenuItem>
                    </Menu>
                  </Box>
                </Box>
              ) : (
                <>
                  <Button className="btn-login border me-3 px-3 bg-white">
                    <Link to="/LoginPage" className="text-decoration-none">
                      Log in
                    </Link>
                  </Button>
                  <Button className="btn-register border px-3 text-white">
                    <Link to="/RegisterPage" className="text-decoration-none">
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

