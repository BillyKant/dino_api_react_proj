import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import dinosaur_bones from '../../assets/images/dinosaur_bones.jpg';
import { getAuth } from 'firebase/auth'; 

interface Props{
    title: string;
}

// Styled Componenets
const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled(Link)( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dinosaur_bones});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

export const Home = ( props:Props ) => {
    const auth = getAuth();
    if (auth.currentUser){
        return (
            <Root>
                <NavbarContainer>
                    <Logo>
                        <LogoA to="/">Dino Park API</LogoA>
                    </Logo>
                    <LogoNavigation>
                        <li>
                            <NavA to="/">Home</NavA>
                        </li>
                        <li>
                            <NavA to="/dashboard">Dashboard</NavA>
                        </li>
                        <li>
                            <NavA to="/signin">Sign In</NavA>
                        </li>
                    </LogoNavigation>
                </NavbarContainer>
                <Main>
                    <MainText>
                        <h1>{props.title}</h1>
                        <p> Dinosaurs Once Ruled the Earth</p>
                        <Button color='primary' variant='contained' component={Link} to='/dashboard'>Discover our Species</Button>
                    </MainText>
                </Main>

            </Root>
        )
    } else {
        return (
            <Root>
                    <NavbarContainer>
                        <Logo>
                            <LogoA to="/">Dino Park API</LogoA>
                        </Logo>
                        <LogoNavigation>
                            {/* <li>
                                <NavA to="/">Home</NavA>
                            </li> */}
                            <li>
                                <NavA to="/signin">Sign In</NavA>
                            </li>
                        </LogoNavigation>
                    </NavbarContainer>
                    <Main>
                        <MainText>
                            <h1>{props.title}</h1>
                            <p> Dinosaurs Once Ruled the Earth</p>
                            <Button color='primary' variant='contained'>Discover our Species</Button>
                        </MainText>
                    </Main>
                    
                </Root>
        )}
}
