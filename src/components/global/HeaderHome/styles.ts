import styled from "styled-components";

export const Container = styled.header`
  padding: 1.25rem;
  background-color: var(--color-white);
  svg {
    cursor: pointer;
  }
  * {
    transition: margin-right 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
`;

export const TopContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h2 {
    cursor: pointer;
  }
  @media (max-width: 725px) {
    display: none;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`

export const NavContainer = styled.nav`
  width: 100%;
  padding-top: 1.25rem;
  ul {
    display: flex;
    gap: 2.75rem;
    align-items: center;
    justify-content: center;
  }
  li {
    color: var(--color-navigation);
  }
  @media (max-width: 725px) {
    display: none;
  }
`;

export const MobileContainer = styled.article`
  display: none;
  @media (max-width: 725px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const NavMobileContainer = styled.nav<{ margin: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: calc(100vh - 4.625rem);
  background-color: var(--color-white);
  top: 4.625rem;
  right: 0;
  margin-right: ${({ margin }) => margin};
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  li {
    color: var(--color-navigation);
    padding: 0.5rem 1rem;
  }
`;