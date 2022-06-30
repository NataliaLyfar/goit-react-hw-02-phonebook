import styled from 'styled-components';
import BackPic from './black-wallpapers-for-smartphone-68-min.jpg';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 760px;
  margin: 0 auto;
  padding-top: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.background};
  background-image: url(${BackPic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.primary};
  `;
export const Header = styled.h1`
font-size: ${p => p.theme.fontSizes.xl};
font-weight: ${p => p.theme.fontWeights.bold};
`;
 