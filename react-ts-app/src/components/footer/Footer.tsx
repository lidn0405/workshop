import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <p className="footerText">
                Youth Pioneers in STEM is a 501(c)(3) nonprofit. Your donation is tax-deductible. <br/>
                © 2021-25 Youth Pioneers in Stem. All rights reserved. <br/><br/>
                Questions? Get in touch at <a href='mailto:contact@ypstem.org'>contact@ypstem.org</a>
            </p>
            <div className='socialMedia'>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "200px"}}>
                    <a className='logoHolder' href='https://linktr.ee/ypstem' title='LinkTree' target='_blank'>
                        <img className='imgClass' src="linktree.png" alt="LINKTREE"/>
                    </a>
                    <a className="logoHolder" href="https://www.linkedin.com/company/82071970/admin/dashboard/" title='LinkedIn' target='_blank'>
                        <img className='imgClass' src="linkedin.png" alt="LINKEDIN" />
                    </a>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "200px"}}>
                    <a className='logoHolder' href="https://www.instagram.com/ypstem/" title='Instagram' target='_blank'>
                        <img src="insta.png" alt="INSTAGRAM" className='imgClass'/>
                    </a>
                    <a className='logoHolder' href="https://www.tiktok.com/@ypstem" title='TikTok' target='_blank'>
                        <img className='imgClass' src="tiktok.jpg" alt="TIKTOK"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export {
    Footer,
}