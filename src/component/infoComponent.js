

export default function InfoComponent(){
    return(
        <div className="info">
            <div className="info1">
                <p><span>Info:</span> If you are a Registered Company inside the European
                Union you will be able to add your VAT ID after your Press "Buy Now"</p>
            </div>
            <div className="info2">
                <div className="col8">
                    <h1>Thank you for your support!</h1>
                    <p>We deliver the best web products</p>
                </div>
                <div className="col8 social">
                    <button><i class="fa-brands fa-twitter"></i> TWEET</button>
                    <button style={{backgroundColor:'blue', opacity: '.7'}}><i class="fa-brands fa-facebook"></i> SHARE</button>
                    <button style={{backgroundColor:'red', opacity: '.8'}}><i class="fa-brands fa-pinterest"></i> PIN IT</button>
                </div>
            </div>
        </div>
    );
}