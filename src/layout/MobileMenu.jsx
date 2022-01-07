import {
  Box,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
  ButtonBase,
} from "@mui/material";
import {
  IconBook,
  IconBox,
  IconBrandGithub,
  IconHome,
  IconMailbox,
  IconMenu2,
  IconUser,
} from "@tabler/icons";
import { useState } from "react";
import { Link } from "react-scroll";

export default ({ theme, setProgress }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const progressCollection = {
    home: 20,
    aboutme: 48,
    services: 73,
    contact: 100,
  };
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Tooltip title="Menu">
          <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
            <Avatar
              variant="rounded"
              sx={{
                ...theme.typography.commonAvatar,
                ...theme.typography.mediumAvatar,
                transition: "all .2s ease-in-out",
                background: theme.palette.primary.light,
                color: theme.palette.primary.dark,
                "&:hover": {
                  background: theme.palette.primary.dark,
                  color: theme.palette.primary.light,
                },
              }}
              onClick={(event) => {
                setAnchorEl(event.currentTarget);
              }}
              color="inherit"
            >
              <IconMenu2 stroke={1.5} size="1.3rem" />
            </Avatar>
          </ButtonBase>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="menu-portfolio"
        open={open}
        onClose={() => setAnchorEl(null)}
        onClick={() => {
          setAnchorEl(null);
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link
          spy={true}
          to="home"
          smooth="easeOutCubic"
          offset={-100}
          duration={1000}
          onClick={() => setAnchorEl(null)}
        >
          <MenuItem sx={{ width: 250 }}>
            <IconHome color={theme.palette.primary.main} />
            <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
              Home
            </Typography>
          </MenuItem>
        </Link>
        <Divider variant="middle" />
        <Link
          spy={true}
          to="aboutme"
          smooth="easeOutCubic"
          offset={-100}
          duration={1000}
          onClick={() => setAnchorEl(null)}
        >
          <MenuItem>
            <IconUser color={theme.palette.primary.main} />
            <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
              About Me
            </Typography>
          </MenuItem>
        </Link>
        <Divider variant="middle" />
        <Link
          spy={true}
          to="services"
          smooth="easeOutCubic"
          offset={-100}
          duration={1000}
          onClick={() => setAnchorEl(null)}
        >
          <MenuItem>
            <IconBox color={theme.palette.primary.main} />
            <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
              Services
            </Typography>
          </MenuItem>
        </Link>
        <Divider variant="middle" />
        <Link
          spy={true}
          to="contact"
          smooth="easeOutCubic"
          offset={-100}
          duration={1000}
          onClick={() => setAnchorEl(null)}
        >
          <MenuItem>
            <IconMailbox color={theme.palette.primary.main} />
            <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
              Contact
            </Typography>
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
};
