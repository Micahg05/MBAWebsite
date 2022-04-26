import React, {useState} from 'react';
import {
    IntroSectionContainer,
    MainCard,
    Title,
    SectionContainer,
    Header,
    BodySections,
    DescriptionContainer,
    OwnershipDescriptionContainer,
    LanyardModalContainer,
    ToggleImage,
    SectionHeaderImage,
    HeaderContentContainer
} from './style';
import { lanyardDescriptions } from './strings';
import OwnershipLanyardModal from './OwnershipLanyardModal';
import LightningBugPassFinal from '../../images/LightningBugPassFinal.png';
import expandArrow from '../../images/expandArrow.svg';
import collapseArrow from '../../images/collapseArrow.svg';
import PlayerAsset from '../../images/PlayerAsset.png';
import ProRel from '../../images/ProRel.png';
import BasicBBall from '../../images/BasicBBall.png';
import KrazyShoe from '../../images/KrazyShoe.png';

export const InfoSections = () => {
    const [section1Expanded, setSection1Expanded] = useState(false);
    const [section2Expanded, setSection2Expanded] = useState(false);
    const [section3Expanded, setSection3Expanded] = useState(false);
    const [section4Expanded, setSection4Expanded] = useState(false);
    const [section5Expanded, setSection5Expanded] = useState(false);
    const [section6Expanded, setSection6Expanded] = useState(false);

    return (
    <IntroSectionContainer>
        <Title>
            Welcome to the MBA
        </Title>
        <MainCard>
            <SectionContainer border>
                <DescriptionContainer>
                    {'Introducing the Metaverse Ballers Association, a team management game building on a combination of the Ethereum and Polygon blockchains. Our stunning artwork (inspired by numerous big NFT artists like Gary Vee, Tom Sachs, and Sartoshi) is sure to ' +
                    'be an instant conversation starter with friends and family, and our finished game product promises to be at least as entertaining as Pixelmon, but at less than 2% the cost! In all seriousness though we are a small team looking to make something cool and entertaining ' +
                    'in Web3, and we hope you enjoy our vision and decide to join us in building the Metaverse Ballers Association!'
                    }
                </DescriptionContainer>
            </SectionContainer>
            <SectionContainer border>
            <DescriptionContainer>
                <Header onClick={() => setSection1Expanded(!section1Expanded)}>
                    <HeaderContentContainer>
                        <SectionHeaderImage src={LightningBugPassFinal} alt="Badge" />
                        <span>Phase 1: Team Ownership Badge Sale</span>
                    </HeaderContentContainer>
                    <div>
                        <ToggleImage src={section1Expanded ? collapseArrow : expandArrow} />
                    </div>
                </Header>
                { section1Expanded && <BodySections>
                    <OwnershipDescriptionContainer>
                        <div>
                            <div>MINT DATE: TBD</div>
                            <div>PRICE: .04 Eth</div>
                            <div>SUPPLY: 1000 NFTs</div>

                            <p>A collection of 1000 ownership token NFTs that function as entry into the MBA ecosystem, randomized into 5 rarity tiers with different perks: </p>
                        </div>
                        <LanyardModalContainer>
                            <OwnershipLanyardModal
                                number={450}
                                imageUrl={LightningBugPassFinal}
                                descriptionTitle="Upper Level Tier"
                                descriptionText={lanyardDescriptions.upperLevel}
                                bg="#9d9d9d"
                            />
                            <OwnershipLanyardModal
                                number={250}
                                imageUrl={LightningBugPassFinal}
                                descriptionTitle="Concourse Tier"
                                descriptionText={lanyardDescriptions.concourse}
                                bg="#1eff00"
                            />
                            <OwnershipLanyardModal
                                number={180}
                                imageUrl={LightningBugPassFinal}
                                descriptionTitle="Luxury Box Tier"
                                descriptionText={lanyardDescriptions.clubLevel}
                                bg="#0070dd"
                            />
                            <OwnershipLanyardModal
                                number={90}
                                imageUrl={LightningBugPassFinal}
                                descriptionTitle="Courtside Tier"
                                descriptionText={lanyardDescriptions.courtside}
                                bg="#a335ee"
                            />
                            <OwnershipLanyardModal
                                number={30}
                                imageUrl={LightningBugPassFinal}
                                descriptionTitle="OG Team Tier" 
                                descriptionText={lanyardDescriptions.ogTeams}
                                bg="#ff8000"
                            />
                        </LanyardModalContainer>
                    </OwnershipDescriptionContainer>
                </BodySections>}
                </DescriptionContainer>
            </SectionContainer>
            <SectionContainer border>
                <DescriptionContainer>
                <Header onClick={() => setSection2Expanded(!section2Expanded)}>
                    <HeaderContentContainer>
                        <SectionHeaderImage src={PlayerAsset} alt="Player image" />
                        <span>Phase 2: Player Airdrop / Additional Mint</span>
                    </HeaderContentContainer>
                    <div>
                        <ToggleImage src={section2Expanded ? collapseArrow : expandArrow} />
                    </div>
                </Header>
                { section2Expanded &&
                    <BodySections>
                        <div>
                            <p>TOTAL SUPPY: 6000 NFTs</p>
                            <p>
                                AIRDROP
                                <div>AIRDROP DATE: TBD</div>
                                <div>PRICE: FREE (To Ownership Badge Holders)</div>
                                <div>SUPPLY: 3000 NFTs</div>
                                <div>After an announced snapshot date, owners will be airdropped player NFTs on Polygon to be used in the management game</div>
                            </p>
                            <p>
                                PRESALE / PUBLIC MINT
                                <div>MINT DATE: TBD</div>
                                <div>PRICE: .03 Eth</div>
                                <div>SUPPLY: 3000 NFTs</div>
                                <div>After allowing badge owners to mint additional allotments if they would like, the remaining supply will be released for public mint. There are many potential reasons why even people without team badges might be interested in keeping a few players as we build out the game.</div>
                            </p>
                        </div>
                    </BodySections>
                }
                </DescriptionContainer>
            </SectionContainer>
            <SectionContainer border>
            <DescriptionContainer>
                <Header onClick={() => setSection3Expanded(!section3Expanded)}>
                    <HeaderContentContainer>
                        <SectionHeaderImage src={BasicBBall} alt="Player image" />
                        <span>Phase 3: League Simulation Game</span>
                    </HeaderContentContainer>
                    <div>
                        <ToggleImage src={section3Expanded ? collapseArrow : expandArrow} />
                    </div>
                </Header>
                { section3Expanded &&
                <BodySections>
                    <div>
                       Phase 3 Content 
                    </div>
                </BodySections>
                }
                </DescriptionContainer>
            </SectionContainer>
            <SectionContainer border>
            <DescriptionContainer>
                <Header onClick={() => setSection4Expanded(!section4Expanded)}>
                    <HeaderContentContainer>
                        <SectionHeaderImage src={KrazyShoe} alt="Player image" />
                        <span>Phase 4: League Expansion</span>
                    </HeaderContentContainer>
                    <div>
                        <ToggleImage src={section4Expanded ? collapseArrow : expandArrow} />
                    </div>
                </Header>
                { section4Expanded &&
                <BodySections>
                    <div>
                        Phase 4 Content
                    </div>
                </BodySections>
                }
                </DescriptionContainer>
            </SectionContainer>
            <SectionContainer border>
            <DescriptionContainer>
                <Header onClick={() => setSection5Expanded(!section5Expanded)}>
                    <HeaderContentContainer>
                        <SectionHeaderImage src={ProRel} alt="Player image" />
                        <span>Phase 5: Promotion / Relegation Begins</span>
                    </HeaderContentContainer>
                    <div>
                        <ToggleImage src={section5Expanded ? collapseArrow : expandArrow} />
                    </div>
                </Header>
                { section5Expanded &&
                    <BodySections>
                        <div>
                            Phase 5 Content
                        </div>
                        <div>

                        </div>
                    </BodySections>
                }
                </DescriptionContainer>
            </SectionContainer>
            <SectionContainer>
            <DescriptionContainer>
                <Header onClick={() => setSection6Expanded(!section6Expanded)}>
                    <HeaderContentContainer>
                        <SectionHeaderImage src={PlayerAsset} alt="Player image" />
                        <span>Phase 6: The Distant Future</span>
                    </HeaderContentContainer>
                    <div>
                        <ToggleImage src={section6Expanded ? collapseArrow : expandArrow} />
                    </div>
                </Header>
                { section6Expanded &&
                <BodySections>
                    <div>
                        Phase 6 Content
                    </div>
                    <div>

                    </div>
                </BodySections>
                }
                </DescriptionContainer>
            </SectionContainer>
        </MainCard>
    </IntroSectionContainer>
    );
};