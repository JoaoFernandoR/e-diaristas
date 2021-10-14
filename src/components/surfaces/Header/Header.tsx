import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Container, Toolbar } from "@mui/material";

const Header = () => {
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                <HeaderLogo src={"/img/logos/logo.svg"} alt="e-diaristas" />;
            </Toolbar>
        </HeaderAppBar>
    );
};

export default Header;
