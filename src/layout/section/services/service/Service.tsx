import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {myTheme} from "../../../../styled/Them.styled.tsx";


type ServicePropsType = {
    iconId: string,
    title: string,
    description: string

    fill?: string
    stroke?: string
    width?: string
    height?: string
    viewBox?: string

}


export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Icon
                iconId={props.iconId}
                width={props.width}
                height={props.height}
                viewBox={props.viewBox || "0 0 43 43" }
                stroke={props.stroke || `${myTheme.colors.font}`}
                fill={props.fill || "none"}
            />
            <ServiceTitle>{props.title}</ServiceTitle>
            <ServiceText>{props.description}</ServiceText>
        </StyledService>
    );
};


const StyledService = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    flex: 1 1 30%;
    align-self: stretch;

    padding: 70px 20px 0 20px;
    min-height: 340px;

    border: 3px solid;
    border-radius: 16px;
    

    &:nth-child(odd) {
        border-color: ${myTheme.colors.accent};
    }

    &:nth-child(even) {
        border-color: ${myTheme.colors.font};

        h3 {
            color: ${myTheme.colors.accent};
        }
    }

`

const ServiceTitle = styled.h3`
    padding: 8px 0 16px;
    font-size: 24px;
    line-height: 1.85;
    text-transform: uppercase;
    text-align: center;
`

const ServiceText = styled.p`
    text-align: center;
`