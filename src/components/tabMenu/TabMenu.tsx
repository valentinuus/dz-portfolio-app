import styled from "styled-components";
import {myTheme} from "../../styled/Them.styled.tsx";


export type TabStatusType = "all" | "css" | "html"

type TabMenuPropsType = {
    tabsItems: Array<{ status:  TabStatusType, title: string }>,
    changeFilterStatus: (value:  TabStatusType) => void
}


export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {

                    return <ListItem key={index}>

                        <LinkTab active ={true} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title} </LinkTab>
                    </ListItem>
                })}
            </ul>

        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    margin: 60px 0 40px;

    & ul {
        display: flex;
        justify-content: center;
        gap: 50px;

    }
`

const ListItem = styled.div``

const LinkTab = styled.button<{active: boolean}>`
    color: #FFF;
    text-transform: uppercase;
    background-color: transparent;
    
    &:hover{
        color: ${myTheme.colors.accent};
    }
`