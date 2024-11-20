/* eslint-disable jsx-a11y/anchor-is-valid */

import { Children } from "react";

export default function ComplexComponent(){
    return(
        <div style={{ width: '83%', margin: 'auto', marginTop: '120px'}}>
            <div className="complex">
                <div className="comp">
                    <h3>Built by developers</h3>
                    <h1>Complex Documentation</h1>
                    <p>From colors, cards, typography to complex elements, you will find the full documentation.
                    Play with the utility classes and you will create unlimited combinations for our components.</p>
                    <a href="#" >Read docs</a>
                </div>
            </div>
            <div className="complex2">
                <div style={{backgroundColor: '#318aec'}} className="col1 col2">
                    <div style={{width: '5%', fontSize: '25px', color: 'white'}}><i class="fa-solid fa-flag"></i></div>
                    <div style={{width: '85%'}}>
                        <h3>Getting Started</h3>
                        <p>Check the possible ways of working with our
                        product and the necessary files for building your own project.</p>
                        <a href="#">Let's start</a>
                    </div>
                </div>
                <div className="col1 col3">
                    <div style={{width: '5%', fontSize: '25px', color: '#318aec'}}><i class="fa-solid fa-paint-roller"></i></div>
                    <div style={{width: '85%'}}>
                        <h3>Plugins</h3>
                        <p>Get inspiration and have an overview about the plugins that we used to create the Material Kit.</p>
                        <a href="#">Read more</a>    
                    </div>
                </div>
                <div className="col1 col3">
                    <div style={{width: '5%', fontSize: '25px', color: '#318aec'}}><i class="fa-solid fa-list-ul"></i></div>
                    <div style={{width: '85%'}}>
                        <h3>Components</h3>
                        <p>Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster.</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}