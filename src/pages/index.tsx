import { Button, Container } from "@mui/material";
// Types
import type { NextPage } from "next";
// Hooks
import useIndex from "../hooks/pages/useIndex.page";
// Components
import PageTitle from "../components/data-display/PageTitle/PageTitle";
import UserInformation from "../components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "../components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "../components/inputs/TextFieldMask/TextFieldMask";
// Styles
import {
    FormElementsContainer,
    ProfissionaisPaper,
    ProfissionaisContainer,
} from "../styles/pages/index.style";

const App: NextPage = () => {
    const { cep, setCep, cepValido } = useIndex();

    return (
        <>
            <SafeEnvironment />
            <PageTitle
                title={"Conheça os profissionais"}
                subtitle={
                    "Preencha seu endereço e veja todos os profissionais da sua localidade"
                }
            />
            <Container>
                <FormElementsContainer>
                    <TextFieldMask
                        label="Digite seu CEP"
                        fullWidth
                        mask={"99.999-999"}
                        variant={"outlined"}
                        value={cep}
                        onChange={(event) => setCep(event.target.value)}
                        error={cep ? !cepValido : false}
                    />
                    {/* <Typography color={"error"}> CEP inválido</Typography> */}
                    <Button
                        variant={"contained"}
                        color={"secondary"}
                        sx={{ width: "220px" }}
                    >
                        Buscar
                    </Button>
                </FormElementsContainer>
                <ProfissionaisPaper>
                    <ProfissionaisContainer>
                        <UserInformation
                            name="John Hernandez"
                            picture="https://github.com/joaofernandor.png"
                            rating={3}
                            description="São paulo"
                        />
                        <UserInformation
                            name="John Hernandez"
                            picture="https://github.com/joaofernandor.png"
                            rating={3}
                            description="São paulo"
                        />
                        <UserInformation
                            name="John Hernandez"
                            picture="https://github.com/joaofernandor.png"
                            rating={3}
                            description="São paulo"
                        />
                        <UserInformation
                            name="John Hernandez"
                            picture="https://github.com/joaofernandor.png"
                            rating={3}
                            description="São paulo"
                        />
                        <UserInformation
                            name="John Hernandez"
                            picture="https://github.com/joaofernandor.png"
                            rating={3}
                            description="São paulo"
                        />
                        <UserInformation
                            name="John Hernandez"
                            picture="https://github.com/joaofernandor.png"
                            rating={3}
                            description="São paulo"
                        />
                    </ProfissionaisContainer>
                </ProfissionaisPaper>
            </Container>
        </>
    );
};

export default App;
