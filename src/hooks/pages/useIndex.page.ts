import { useState, useMemo } from "react";
// Interfaces
import { UserShortInterface } from "../../@types/UserInterface";
// Helpers
import { CepValidation } from "../../helpers/ValidationService";

const useIndex = () => {
    const [cep, setCep] = useState(""),
        cepValido = useMemo(() => {
            return CepValidation(cep);
        }, [cep]),
        [erro, setErro] = useState(""),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(),
        [diaristas, setDiaristas] = useState<UserShortInterface[]>([]),
        [diaristasRestantes, setDiaristasRestantes] = useState(0);

    // Assim seria o jeito sem usar o UseMemo(), isso acontece, porque temos um monte de estado, e a validação do cep agora, só vai ser executado
    // Se o nosso estado de 'cep' for alterado
    // const cepValido = ValidationService.cep(cep)
    //     ? "CEP VALIDO"
    //     : "CEP INVALIDO";

    return {
        cep,
        setCep,
        cepValido,
    };
};

export default useIndex;
