import { styled } from "@mui/material/styles";
import { Container, Typography } from "@mui/material";

export const FooterStyled = styled("footer")`
    margin-top: auto;

    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding: ${({ theme }) => theme.spacing(4)} 0px;
`;

export const FooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: ${({ theme }) => theme.spacing(2)};

    ${({ theme }) => theme.breakpoints.down("md")} {
        gap: ${({ theme }) => theme.spacing(5)};
    }
`;

export const AppList = styled("ul")`
    display: flex;

    gap: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(2)};

    img {
        width: 122px;
    }
`;

export const FooterTitle = styled((props) => (
    <Typography component={"h2"} variant={"body2"} {...props} />
))`
    font-weight: bold;
`;
