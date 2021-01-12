import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const NavM = styled.nav`
  background: #101522;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: relative;
  top: 0;
  z-index: 999;
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  background: none;
  &:hover {
    color: #3d58f3;
  }
  @media screen and (max-width: 768px) {
    background: #fafafa;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    position: absolute;
    top: 50px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const NavMenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;

    &:hover {
      background: #f1f1f1;
    }
  }
`;

const NavMenuLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  color: #fff;

  @media screen and (max-width: 768px) {
    text-align: center;
    color: #383340;
    padding: 1rem;
    width: 100%;
    display: table;
    &:hover {
      color: #3d58f3;
      transition: all 0.3s ease;
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    color: #fff;
    display: block;
    font-size: 30px;
    margin-right: 15px;
    position: absolute;
    top: 23%;
    right: 0;
    cursor: pointer;
  }
`;

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <NavM>
      <NavBarContainer>
        <MobileMenu onClick={handleClick}>
          {click ? <IoMdClose /> : <FaBars />}
        </MobileMenu>
        <NavMenu onClick={handleClick} click={click}>
          <NavMenuItem>
            <NavMenuLinks to="/">Home</NavMenuLinks>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuLinks to="/about">About</NavMenuLinks>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuLinks to="/blog">Blog</NavMenuLinks>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuLinks to="/contact">Contact</NavMenuLinks>
          </NavMenuItem>
        </NavMenu>
      </NavBarContainer>
    </NavM>
  );
};

export default Nav;
