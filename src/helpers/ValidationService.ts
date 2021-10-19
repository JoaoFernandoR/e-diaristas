export const CepValidation = (cep = ""): boolean => {
    return cep.replace(/\D/g, "").length === 8;
};
