import styled  from 'styled-components';
import {device} from '../deviceSizes';

export const MainContainer = styled('div')`
    display: flex;
    flex-direction: column;
    min-height: 700px;
`;

export const MainImageContainer = styled('div')`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`;

export const PlayerImage = styled('img')`
    height: 600px;
    width: auto;
`;