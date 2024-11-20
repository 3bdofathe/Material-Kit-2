/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import ph1 from '../images/favicon.png'

export default function FooterComponent(){
    return(
        <div>
            <div className="footer">
                <div className="foot1">
                    <a href="#">
                        <img src={ph1}></img>
                    </a>
                    <h1>Material Kit 2 PRO</h1>
                    <div className='log'>
                        <a href='#'><i class="fa-brands fa-facebook"></i></a>
                        <a href='#'><i class="fa-brands fa-twitter"></i></a>
                        <a href='#'><i class="fa-brands fa-github"></i></a>
                        <a href='#'><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <div className="foot2">
                    <div className='col9'>
                        <a href='#'><h3>company</h3></a>
                        <a href='#'><h5>about us</h5></a>
                        <a href='#'><h5>freebies</h5></a>
                        <a href='#'><h5>premium tools</h5></a>
                        <a href='#'><h5>blog</h5></a>
                    </div>
                    <div className='col9'>
                        <a href='#'><h3>resources</h3></a>
                        <a href='#'><h5>about us</h5></a>
                        <a href='#'><h5>freebies</h5></a>
                        <a href='#'><h5>premium tools</h5></a>
                        <a href='#'><h5>blog</h5></a>
                    </div>
                    <div className='col9'>
                        <a href='#'><h3>help & support</h3></a>
                        <a href='#'><h5>about us</h5></a>
                        <a href='#'><h5>freebies</h5></a>
                        <a href='#'><h5>premium tools</h5></a>
                        <a href='#'><h5>blog</h5></a>
                    </div>
                    <div className='col9'>
                        <a href='#'><h3>legal</h3></a>
                        <a href='#'><h5>about us</h5></a>
                        <a href='#'><h5>freebies</h5></a>
                        <a href='#'><h5>premium tools</h5></a>
                        <a href='#'><h5>blog</h5></a>
                    </div>
                </div>
            </div>
            
            <div className='foot3'>
            All rights reserved. Copyright © 2024 Material Kit by Creative Tim.<br />
            Created by Eng / 3abdelrahim Fathy  
            </div>
        </div>
    );
}