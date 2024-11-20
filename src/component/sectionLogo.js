
import ph1 from '../images/logos/gray-logos/logo-apple.svg'
import ph2 from '../images/logos/gray-logos/logo-facebook.svg'
import ph3 from '../images/logos/gray-logos/logo-nasa.svg'
import ph4 from '../images/logos/gray-logos/logo-vodafone.svg'
import ph5 from '../images/logos/gray-logos/logo-netflix.svg'

export default function SectionLogo(){
    return(
        <div style={{marginTop: '100px'}}>
            <div className="sec1">
                <h1>Trusted by over</h1>
                <h2>1,679,477+ web developers</h2>
                <p>Many Fortune 500 companies, startups, universities and 
                governmental institutions love Creative Tim's products.</p>
            </div>
            <div className="sec2">
                <div className="col5">
                    <h4>Nick Willever</h4>
                    <h5><i class="fa-solid fa-clock"></i> 1 day ago</h5>
                    <p>"This is an excellent product, the documentation is excellent
                         and helped me get things done more efficiently."</p>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div>
                <div className="col5 active">
                    <h4>Shailesh Kushwaha</h4>
                    <h5 style={{opacity: '1'}}><i class="fa-solid fa-clock"></i> 1 week ago</h5>
                    <p style={{color: 'white'}}>"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"</p>
                    <span style={{opacity: '1'}}><i class="fa-solid fa-star"></i></span>
                    <span style={{opacity: '1'}}><i class="fa-solid fa-star"></i></span>
                    <span style={{opacity: '1'}}><i class="fa-solid fa-star"></i></span>
                    <span style={{opacity: '1'}}><i class="fa-solid fa-star"></i></span>
                    <span style={{opacity: '1'}}><i class="fa-solid fa-star"></i></span>
                </div>
                <div className="col5">
                    <h4>Samuel Kamuli</h4>
                    <h5><i class="fa-solid fa-clock"></i> 3 day ago</h5>
                    <p>"Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."</p>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div>
            </div>

            <hr style={{ margin: 'auto', width: '83%' , marginTop: '100px', marginBottom: '70px', opacity: '.1'}} />

            <div className="logos">
                <div className='col6'>
                    <img src={ph1} alt='logo'></img>
                </div>
                <div className='col6'>
                    <img src={ph2} alt='logo'></img>
                </div>
                <div className='col6'>
                    <img src={ph3} alt='logo'></img>
                </div>
                <div className='col6'>
                    <img src={ph4} alt='logo'></img>
                </div>
                <div className='col6'>
                    <img src={ph5} alt='logo'></img>
                </div>
            </div>

            
        </div>
    );
}