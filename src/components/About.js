import React from "react";


function About(props) {
    return (
        <aside>
            <img
            src={props.blogImage || "https://via.placeholder.com/215"}
            alt="blog logo"
            />
            <p>{props.blogAbout}</p>
        </aside>
    );
}

export default About; 