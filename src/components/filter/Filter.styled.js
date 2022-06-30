import styled from "styled-components";

export const FilterBox = styled.div`
display: flex;
flex-flow: column;
align-items: center;
width: 350px
`;
export const Label = styled.label`
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.xs};
svg{
    margin-right: ${p => p.theme.space[0]}px;
}
`;
export const Input = styled.input`
transition: all .3s ease;
margin-bottom: ${p => p.theme.space[1]}px;
padding: 0 ${p => p.theme.space[0]}px;
background: transparent;
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
height: 30px;
width: 350px;
color: ${p => p.theme.colors.primary};
font-family:inherit;
font-weight: ${p => p.theme.fontWeights.normal};
font-size: ${p => p.theme.fontSizes.s};
&:hover, &:focus {
    outline: none;
    color: ${p => p.theme.colors.primary};
    background: ${p => p.theme.colors.secondary};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
};
`;