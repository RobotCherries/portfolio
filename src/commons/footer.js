import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import react_logo from '../icons/react_logo.svg';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <ul className="footer__row container">
                    <li className="footer__col">
                        <h4 className='footer__title'>About Me</h4>

                        <p className='footer__text'>
                            Hi, I'm Oana. <br/>
                            I am a web development and design enthusiast
                            also a massive autodidact.
                            <br/><br/>
                            I love learning, reading, painting (traditional & digital), computers, building things and improving myself.
                            <br/><br/>
                            If you wish, head over to the contact page and tell me something about yourself. 
                            <span style={{ fontSize: '18px' }} role='img' aria-label='Smiling face with smiling eyes'>😊</span>
                            <span style={{ fontSize: '18px' }} role='img' aria-label='Waving hand'>👋</span>
                        </p>
                    </li>
                    <li className="footer__col">
                        <h4 className='footer__title'>Footer Navigation</h4>

                        <ul className="footer__navigation">
                            <li className="footer__navigation-li">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link to={'/development'}>Web Development</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link to={'/design'}>Design</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link className='disabled' to={'/blog'}>Blog</Link>
                            </li>
                            <li className="footer__navigation-li">
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="footer__col">
                        <h4 className='footer__title'>Other Media</h4>

                        <ul className='footer__social'>
                            <li className="footer__social-li">
                                <a href="https://www.freecodecamp.org/robotcherries" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-free-code-camp fa-2x"></i>
                                </a>
                            </li>
                            <li className="footer__social-li">
                                <a href="https://codepen.io/RobotCherries/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-codepen fa-2x"></i>
                                </a>
                            </li>
                            <li className="footer__social-li">
                                <a href="https://github.com/RobotCherries" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github fa-2x"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="footer__aside container">
                    <p>Made with</p>
                    <img className='footer__react-logo' src={react_logo} alt='React.js logo' />
                </div>
            </footer>
        );
    }
}

export default Footer;