import {
    FooterStyled,
    FooterContainer,
    FooterTitle,
    AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: "400px" }}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={"body2"} sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui iste quae rem natus aperiam dolorum tenetur autem
                        esse praesentium quis!
                    </Typography>
                </Box>
                <div>
                    <FooterTitle> Baixe nossos aplicativos</FooterTitle>
                    <AppList>
                        <li>
                            <a
                                href={"/"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/img/logos/app-store.png"
                                    alt="AppStore"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={"/"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/img/logos/google-play.png"
                                    alt="GooglePlay"
                                />
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;
