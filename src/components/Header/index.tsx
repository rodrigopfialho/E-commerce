import React from "react";
import {Container, Content} from './styles'
import Logo from '../../images/logo.svg'
import Profile from '../../images/image-avatar.png'
import { CartItem } from "../CartItem";

export function Header() {
    return (
        <Container>
                <div>
                    <img className="logo" src={Logo} alt="Logo"/>
                    <ul>
                        <li>
                            <a href="#">Collections</a>
                        </li>
                        <li>
                            <a href="#">Men</a>
                        </li>
                        <li>
                            <a href="#">Women</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                <Content>
                    <CartItem />
                    
                    <div>
                        <img className="profile" src={Profile} alt="Profile"/>
                    </div>
                </Content>
        </Container>
    )
}