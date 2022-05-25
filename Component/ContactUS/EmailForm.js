import React from "react";



const EmailForm = () => {
    return (
        <>
            <p className="fs-40 Gothic_3D greyBlack">Send Email</p>
            <p className="text-nowrap mb-0 fs-18" subHeading>You can also contact us at:</p>
            <div className="d-inline-flex my-5">
                <div className=" d-flex">
                    <img src={"email_2.svg"} alt="" className="me-4 my-auto hover" />
                </div>
                <div>
                    <p className="fs-17 mb-0 Bold greyBlack">Email</p>
                    <p className="fs-19 mb-0 greyBlack">info@reilitics.com</p>
                </div>
            </div>
            <p className=' fs-21 mb-1 Boldest greyBlack'>Find us on social</p>
            <div className="d-flex linksDiv mt-0">
                <img className="links hover" style={{width:'44px', height:'44px'}} src={"Facebook.svg"} alt="" />
                <img className="links hover" style={{width:'44px', height:'44px'}} src={"Twitter.svg"} alt="" />
                <img className="links hover" style={{width:'44px', height:'44px'}} src={"Instagram.svg"} alt="" />
                <img className="links hover" style={{width:'44px', height:'44px'}} src={"pinterest-square.svg"} alt="" />
            </div>
        </>
    )
}
export default EmailForm