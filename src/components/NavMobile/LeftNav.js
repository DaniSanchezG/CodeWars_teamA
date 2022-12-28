import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-170%)'};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    transition: transform 0.02s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>HOME</li>
      <li>VIDEOS</li>
      <li>FILMS</li>
      <li>SERIES</li>
      <li>INTERACTIVE</li>
      <li>COMMUNITY</li>
      <li>DATABANK</li>
      <li>CODE+</li>
      {/* <li>Sign In</li>
      <li>Sign Up</li> */}
    </Ul>
  )
}

export default LeftNav