import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/logo";
import { useAuth } from "../context/AuthContext";
import NavLinks from "./shared/NavLinks";

const header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isloggedIn ? (
            <>
              <NavLinks
                to="/chat"
                bg="#3e5495"
                text="Go To Chat"
                textColor="white"
              />
              <NavLinks
                to={"/"}
                bg={"#51538f"}
                text={"Log Out"}
                textColor={"White"}
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavLinks
                to="/login"
                bg="#3e5495"
                text="Log in"
                textColor="White"
              />
              <NavLinks
                to="/signup"
                bg="#51538f"
                text="Sign Up"
                textColor="White"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default header;
