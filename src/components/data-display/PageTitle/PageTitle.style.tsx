import { styled } from "@mui/material/styles";

export const PageTitleContainer = styled("div")`
    margin: ${({ theme }) => theme.spacing(5)};
    text-align: center;
`;

export const PageTitleStyled = styled("h2")`
    font-weight: 600;

    color: ${({ theme }) => theme.palette.primary.main};
    font-size: ${({ theme }) => theme.typography.h6.fontSize};

    ${({ theme }) => theme.breakpoints.down("md")} {
        font-size: ${({ theme }) => theme.typography.body1.fontSize};
    }
`;

export const PageSubtitleStyled = styled("h3")`
    font-weight: normal;

    margin: ${({ theme }) => theme.spacing(1.5)} 0px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};

    ${({ theme }) => theme.breakpoints.down("md")} {
        font-size: ${({ theme }) => theme.typography.body2.fontSize};
    }
`;
