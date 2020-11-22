import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
}
`;
export const UpdatedButtonStyled = styled.p`
  color: red;
`;

export const CreatButtonStyled = styled.button`
  color: red;
  background-color: pink;
  &:hover {
    color: red;
    background-color: pink;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  color: ${(props) => props.theme.mainColor};

  &.active {
    background-color: #fcb900;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

export const GoBackButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%auto;

  img {
    width: 10%;
    float: auto;
  }
  p {
    vertical-align: middle;
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: right;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: #f78da7;
  color: #7bdcb5;
`;

export const Title = styled.h1`
  text-align: center;
  color: #f78da7;
`;
export const Description = styled.h4`
  text-align: center;
  color: #f78da7;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
export const UkuleleWrapper = styled.div`
  margin: 20px;

  img {
    width: 350px;
    height: 450px;
    object-fit: cover;
  }

  p {
    text-align: center;

    &.ukulele-price {
      color: #9900ef;
    }
  }
`;
