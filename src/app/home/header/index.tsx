import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// import Image from "next/image";
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { BootstrapButton } from "../../../app/components/bootstrapButton";
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import Link from "@mui/material/Link";

const pages = ["Modulos", "Certificados", "Contato"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#262626",
        padding: 2,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          {/* <Image
            src="/logo-zoe-academy.png"
            alt="Minha Imagem"
            width={70}
            height={60}
          /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Home"
            sx={{
              mr: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ZOE ACADEMY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <BootstrapButton 
              startIcon={<SupervisorAccountOutlinedIcon />}
              disableRipple
              variant="contained" 
              onClick={() => {}}
              sx={{
                color: "#262626",
                background: "#FFD700",
                "&:hover": {
                  backgroundColor: "#FFEB3B",
                },
                margin: 1,
              }}
            >
              Administrador 
            </BootstrapButton >
            <BootstrapButton 
              startIcon={<SchoolOutlinedIcon />}
              disableRipple
              variant="contained" 
              onClick={() => {}}
              sx={{
                color: "#262626",
                background: "#FFD700",
                "&:hover": {
                  backgroundColor: "#FFEB3B",
                },
                margin: 1,
              }}
            >
              Módulos
            </BootstrapButton >

            <BootstrapButton 
              startIcon={<WorkspacePremiumOutlinedIcon />}
              disableRipple
              variant="contained" 
              onClick={() => {}}
              sx={{
                color: "#262626",
                background: "#FFD700",
                "&:hover": {
                  backgroundColor: "#FFEB3B",
                },
                margin: 1,
              }}
            >
              Certificados
            </BootstrapButton >
            <Link href="/Contact" variant="body2">
            <BootstrapButton 
              startIcon={<LocalPhoneOutlinedIcon />}
              disableRipple
              variant="contained" 
              onClick={() => {}}
              sx={{
                color: "#262626",
                background: "#FFD700",
                "&:hover": {
                  backgroundColor: "#FFEB3B",
                },
                margin: 1,
              }}
              >
              Contatos
            </BootstrapButton >
              </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
