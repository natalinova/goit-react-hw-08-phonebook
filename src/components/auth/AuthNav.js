import React from 'react';
import { NavItem } from './AuthStyled';


export default function AuthNav() {
  return (
    <div>
      <NavItem
        to="/register"
      >
        Registration
      </NavItem>
      <NavItem
        to="/login"
    
      >
        Login
      </NavItem>
    </div>
  );
}