import React from "react";
import { Container } from "@mui/material";
// Styles
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";

const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Ambiente Seguro <i className={"twf-lock"} />
            </Container>
        </SafeEnvironmentContainer>
    );
};

export default SafeEnvironment;
