import styled from 'styled-components';
import CoffeePic from './3ef69b6e05160d6c1df9ecae3c5b68c3.jpg';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 750px;
  gap: ${p => p.theme.space[4]}px;
  padding-top: 5vh;
  padding-left: 20vw;
  background-image: url(${CoffeePic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: ${p => p.theme.fonts.body};
  `;

  export default Container;