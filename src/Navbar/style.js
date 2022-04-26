import styled  from 'styled-components';
import {device} from '../deviceSizes';

export const NavContainer = styled('div')`
display:flex;
flex-direction: row;
justify-content: space-between;
padding: 40px;
`;

export const MainLogo = styled('img')`
height: 100px;
width: auto;
`;

export const LinkContainer = styled('div')`
display: flex;
flex-direction: row;
gap: 30px;
align-items: center;
`;

export const ExternalLinkImage = styled('img')`
height: 60px;
width: auto;
`;