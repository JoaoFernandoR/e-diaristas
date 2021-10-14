import {
    AvatarStyled,
    RatingStyled,
    UserDescription,
    UserInformationContainer,
    UserName,
} from "./UserInformation.style";

interface UserInformationProps {
    picture: string;
    name: string;
    rating: number;
    description?: string;
}

const UserInformation = ({
    picture,
    name,
    rating,
    description,
}: UserInformationProps) => {
    return (
        <UserInformationContainer>
            <AvatarStyled src={picture} />

            <UserName> {name}</UserName>
            <RatingStyled readOnly value={rating} />
            <UserDescription>{description}</UserDescription>
        </UserInformationContainer>
    );
};

export default UserInformation;
