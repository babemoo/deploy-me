import React from "react";

const Footer = (props) => {
    const {company,email} = props;
    return (
        
    <div className="container-fluid">
        <hr />
        <div className="text-center text-uppercase">
            <small>
                <span className="text-danger">
                    Power By {company}
                </span> 
                |
                <span className="text-muted"> 
                    Contact By {email}
                </span>
            </small>
        Z</div>
    </div>
    )
}


export default Footer;