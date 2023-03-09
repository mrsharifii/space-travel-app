import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p>987 Space Ave.</p>
                            <h4>San Francisco, CA</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 1-800-123-4567</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> travel@trax.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>Follow us</h4>
                    <p>"Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam"</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem', cursor: 'pointer' }}  />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem', cursor: 'pointer' }} />
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem', cursor: 'pointer' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
