import styled from "styled-components"

const StyledLine = styled.div`
font-size: 24px;
color:  ${props => props.color || props.theme.colors.primory}
${props => props.outlined && css`
    color: ${props => props.color || 'white'};
    border: 1px solid ${props => props.color || "white"};
    background: transparent;
`}
`

export const Line = (props) => {
    return <StyledLine {...props} />
}
