/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import { Children } from "react";
import BlockImage from "./BlockImage";
// import images
import ph1 from '../images/img/1.jpg'
import ph2 from '../images/img/2.png'
import ph3 from '../images/img/3.jpg'
import ph4 from '../images/img/4.png'
import ph5 from '../images/img/5.jpg'
import ph6 from '../images/img/6.jpg'
import ph7 from '../images/img/7.png'
import ph8 from '../images/img/8.png'
import ph9 from '../images/img/9.jpg'
import ph10 from '../images/img/10.jpg'
import ph11 from '../images/img/11.png'
import ph12 from '../images/img/12.png'
import ph13 from '../images/img/13.png'
import ph14 from '../images/img/14.png'
import ph15 from '../images/img/15.png'
import ph16 from '../images/img/16.png'
import ph17 from '../images/img/17.png'
import ph18 from '../images/examples/p1.jpg'
import ph19 from '../images/examples/p2.jpg'
import ph20 from '../images/examples/p3.jpg'
import ph21 from '../images/img/20.jpg'
import ph22 from '../images/img/21.jpg'
import ph23 from '../images/img/23.jpg'
import ph24 from '../images/img/24.jpg'
import ph25 from '../images/img/25.jpg'
import ph26 from '../images/img/26.jpg'
import ph27 from '../images/img/27.jpg'
import ph28 from '../images/img/28.jpg'
import ph29 from '../images/img/29.jpg'


export default function SectionsComponent(){

    // section 1
    const imageList = [
        {
            id: 1,
            Children: <img src={ph1} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 2,
            Children: <img src={ph2} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 3,
            Children: <img src={ph3} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 4,
            Children: <img src={ph4} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 5,
            Children: <img src={ph5} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 6,
            Children: <img src={ph6} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 7,
            Children: <img src={ph7} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 8,
            Children: <img src={ph8} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 9,
            Children: <img src={ph9} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 10,
            Children: <img src={ph10} alt="photo" />,
            parag: "Page Headers"
        },
    ];

    const NewImageList = imageList.map((event) => {
        return <BlockImage key={event.id} Children={event.Children} parag={event.parag} />
    });

    // section 2
    const imageList2 = [
        {
            id: 1,
            Children: <img src={ph11} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 2,
            Children: <img src={ph12} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 3,
            Children: <img src={ph13} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 4,
            Children: <img src={ph14} alt="photo" />,
            parag: "Page Headers"
        },
    ];

    const NewImageList2 = imageList2.map((event) => {
        return <BlockImage key={event.id} Children={event.Children} parag={event.parag} />
    });

    // section 3
    const imageList3 = [
        {
            id: 1,
            Children: <img src={ph15} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 2,
            Children: <img src={ph16} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 3,
            Children: <img src={ph17} alt="photo" />,
            parag: "Page Headers"
        }
    ];

    const NewImageList3 = imageList3.map((event) => {
        return <BlockImage key={event.id} Children={event.Children} parag={event.parag} />
    });

    // section 4
    const imageList4 = [
        {
            id: 1,
            Children: <img src={ph29} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 2,
            Children: <img src={ph21} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 3,
            Children: <img src={ph22} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 4,
            Children: <img src={ph23} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 5,
            Children: <img src={ph24} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 6,
            Children: <img src={ph25} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 7,
            Children: <img src={ph26} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 8,
            Children: <img src={ph27} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 9,
            Children: <img src={ph28} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 10,
            Children: <img src={ph6} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 11,
            Children: <img src={ph10} alt="photo" />,
            parag: "Page Headers"
        },
        {
            id: 12,
            Children: <img src={ph15} alt="photo" />,
            parag: "Page Headers"
        },
    ];

    const NewImageList4 = imageList4.map((event) => {
        return <BlockImage key={event.id} Children={event.Children} parag={event.parag} />
    });


    return(
        <div style={{marginTop: '170px', width: '100%'}}>
            <div className="infinite">
                <span>Infinite combinations</span>
                <h1>Huge collection of sections</h1>
                <p>We have created multiple options for you to put together and customise into pixel perfect pages.</p>
            </div>
            {/* section 1  */}
            <div className="section">
                <div className="design">
                    <Design text1={"Design Blocks"}
                            text2={"A selection of 45 page sections that fit perfectly in any combination"}/>
                </div>
                <div className="block">
                    {NewImageList}
                </div>
            </div>
            {/* section 2  */}
            <div className="section section2">
                <div className="design">
                    <Design text1={"Attention Catchers"}
                            text2={"20+ Fully coded components that popup from different places of the screen"}/>
                </div>
                <div className="block">
                    {NewImageList2}
                </div>
            </div>
            {/* section 3  */}
            <div className="section section2">
                <div className="design">
                    <Design text1={"Navigation"}
                            text2={"30+ components that will help go through the pages"}/>
                </div>
                <div className="block">
                    {NewImageList3}
                </div>
            </div>

            {/* Account pages */}
            <div className="account">
                <div className="account1">
                    <div className="txt">
                        <h1>Account Pages for beautiful webapps</h1>
                        <p>We created many examples for pages like Signup, Signin, Forgot Password,
                         2FA Authentification and so on.
                         Just choose between a Basic Design, an illustration or a cover and you are good to go!</p>
                         <button>VIEW PAGES</button>
                         <a href="#">VIEW SIGNUP PAGE</a>
                    </div>
                    <div className="page">
                        <div className="page1">
                            <AccountPages pho={ph18}/>
                        </div>
                        <div className="page1">
                            <AccountPages pho={ph19}/>
                        </div>
                        <div className="page1">
                            <AccountPages pho={ph20}/>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Account pages */}

            <div className="infinite">
                <span>boost creativity</span>
                <h1>With our coded pages</h1>
                <p>The easiest way to get started is to use one of our
                pre-built example pages.</p>
            </div>

            {/* Presentation Pages */}
            <div style={{marginTop: '150px'}} className="section">
                <div className="block">
                    {NewImageList4}
                </div>
                <div className="design">
                    <Design text1={"Presentation Pages for Company, Landing Pages, Blogs and Support"}
                    text2={"These is just a small selection of the multiple possibitilies you have. Focus on the business, not on the design."}/>
                </div>
            </div>
            
        </div>
    );
}
function Design({text1, text2}){
    return(
        <div>
            <h3>{text1}</h3>
            <p>{text2}</p>
        </div>
    );   
}

function AccountPages({pho}){
    return(
        <a href="#">
            <img src={pho} alt="photo"></img>
        </a>
    );
}