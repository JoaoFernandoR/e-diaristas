// Types
import type { NextPage } from "next";
// Components
import PageTitle from "../components/data-display/PageTitle/PageTitle";
import UserInformation from "../components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "../components/feedback/SafeEnvironment/SafeEnvironment";

const App: NextPage = () => {
    return (
        <>
            <SafeEnvironment />
            <PageTitle
                title={"Conheça os profissionais"}
                subtitle={
                    "Preencha seu endereço e veja todos os profissionais da sua localidade"
                }
            />
            <UserInformation
                name="John Hernandez"
                picture="https://github.com/joaofernandor.png"
                rating={3}
                description="São paulo"
            />
        </>
    );
};

export default App;
