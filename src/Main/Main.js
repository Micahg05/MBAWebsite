import React from 'react';
import InfoSections from './InfoSections';
import { MainContainer, PlayerImage, MainImageContainer } from './style';
import Tilt from 'react-parallax-tilt';
import PlayerAsset from '../images/PlayerAsset.png';
import './main.css';

export const Main = () => {
    return (
        <MainContainer>
            <MainImageContainer>
                {/* <PlayerImage src={PlayerAsset} alt="Player photo" /> */}
                <Tilt>
                    <div class="card" data-tilt data-tilt-glare data-tilt-max-glare="0.5">
                        <div class="card-image"></div>
                    </div>
                </Tilt>
            </MainImageContainer>
            <InfoSections />
        </MainContainer>
    );
};