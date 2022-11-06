import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TotalAppBar = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
padding: 20px 60px;
box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.2);
background: linear-gradient(to bottom, rgba(241,231,103,1) 0%, rgba(239,190,97,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#efbe61', GradientType=0 );
`

export const UserMenuText = styled.span`
font-weight:700
`
export const NavItem = styled(NavLink)`
font-size: 25px;
margin-left: 40px;
color: #4a6500;
text-decoration: none;
font-weight: 700;
&.active{
    color: #4a1500;
}
`