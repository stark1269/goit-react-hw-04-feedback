import styled from 'styled-components';

export const Button = styled.button`
:not(:last-child) {
margin-right: 8px;
}
border-radius: 6px;
border: 1px solid skyblue;
padding: 4px 8px;
font-size: 18px;
transition: transform 300ms linear;
:active {
  background-color: skyblue;
  color: white;
}
:hover, :focus {
  transform: scale(1.05);
}
`;