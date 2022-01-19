import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap'
import './Main.css'
import fix from "./videos/fix.mp4"
import me from "./img/me.jpg"
import git from "./icons/git.svg"
import twitter from "./icons/twitter.svg"
import instagram from "./icons/instagram.svg"
import linkedin from "./icons/linkedin.svg"
import laptop from "./icons/website.png"
import whatsapp from "./icons/whatsapp.svg"

export default class Maintain extends Component {
    render() {

        return (
            <div>
                <Container fluid id="main">  
                            
                <video autoPlay="" loop="" muted="" playsInline="" src={fix} type='video/mp4' />
                    
                    <Row id='ssss'>
                        <div id="imag">
                            <img id='img' src={me} alt="" />
                        </div>
                        <div id='name'>
                            Hi, I'm Vijeeth<br></br>
                            Let's Connect together
                        </div>
                        <a id='box' href="https://vijeeth143.github.io/updateweb/">
                        Portable Website <img src={laptop} alt="" />
                        </a>
                        <a id='box' href="https://instagram.com/vijeeth_sankar?utm_medium=copy_link">
                        Instagram <img src={instagram} alt="" />
                        </a>
                        <a id='box' href="https://github.com/Vijeeth143">
                        GitHub <img src={git} alt="" />
                        </a>
                        <a id='box' href="https://www.linkedin.com/in/vijeeth-sankar-2123b1201">
                        LinkedIn <img src={linkedin} alt="" />
                        </a>
                        <a id='box' className='twi' href="https://twitter.com/Vijeeth_Sankar">
                        Twitter <img id="twi" src={twitter} alt="" />
                        </a>
                        <a id='box' className='twi' href="https://twitter.com/Vijeeth_Sankar">
                        Whatsapp <img id="twi" src={whatsapp} alt="" />
                        </a>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}
