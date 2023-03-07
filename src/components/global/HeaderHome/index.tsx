import {
  CartIcon,
  CloseIcon,
  HamburguerIcon,
  ProfileIcon,
  SearchIcon,
} from "@assets/icons";
import { navList } from "@mocks/header";
import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./styles";

export const HeaderHome = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useRouter();
  return (
    <S.Container>
      <S.TopContainer>
        <SearchIcon size="1.2rem" />
        <h3
          onClick={() => {
            navigate.push("/");
          }}
        >
          Avion
        </h3>
        <S.IconsContainer>
          <CartIcon size="1.2rem" />
          <ProfileIcon size="1.2rem" />
        </S.IconsContainer>
      </S.TopContainer>
      <S.NavContainer>
        <ul>
          {navList.map((element, index) => {
            return <li key={index + " - " + element.name}>{element.name}</li>;
          })}
        </ul>
      </S.NavContainer>
      <S.MobileContainer>
        <h3
          onClick={() => {
            navigate.push("/");
          }}
        >
          Avion
        </h3>
        <S.IconsContainer>
          <SearchIcon size="1.2rem" />
          {!menuIsOpen ? (
            <HamburguerIcon
              size="1.2rem"
              onClick={() => {
                setMenuIsOpen(true);
              }}
            />
          ) : (
            <CloseIcon
              // size="1.2rem"
              onClick={() => {
                setMenuIsOpen(false);
              }}
            />
          )}
        </S.IconsContainer>
      </S.MobileContainer>
      <S.NavMobileContainer margin={menuIsOpen ? '0' : '-100%'}>
        <ul>
          {navList.map((element, index) => {
            return <li key={index + " - " + element.name}>{element.name}</li>;
          })}
        </ul>
      </S.NavMobileContainer>
    </S.Container>
  );
};
