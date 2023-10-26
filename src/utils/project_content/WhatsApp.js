import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { IoLogoGithub, IoLogoReact } from "react-icons/io5";
import { AiOutlineTrophy } from "react-icons/ai";
import { SiPostman } from "react-icons/si";

class WhatsApp extends React.Component {
    render() {
        return (
            <div>
                <div style={{ backgroundColor: "#282c34" }}>
                    <p style={{color:"White"}}>Check out the Github Repo:</p>
                    <a href="https://github.com/WinnieChowCodes/WhatsThatApp"><IoLogoGithub style={{ color: "White" }} size={100}/></a>
                    <Carousel>
                        <Carousel.Item>
                            <img src={process.env.PUBLIC_URL + "/Chats.png"} alt="WhatsThat App Chats" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={process.env.PUBLIC_URL + "/Users.png"} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={process.env.PUBLIC_URL + "/Profile.png"} />
                        </Carousel.Item>
                    </Carousel>
                    <br />
                </div>

                <div style={{ display: "flex", justifyContent: 'space-evenly', margin: "5px" }}>
                    <div style={{ border: "5px solid", borderRadius: "20px", }}>
                        <h2>Skills Equipped</h2>
                        <IoLogoReact size={100} />
                        <SiPostman size={100} />
                    </div>

                    <div style={{ border: "5px solid", borderRadius: "20px", width: "55%" }}>
                        <h2>Goals</h2>
                        <ul style={{ listStyleType: "None" }}>
                            <li><AiOutlineTrophy /> Create an frontend mobile application using a Restful API.</li>
                            <li><AiOutlineTrophy /> Create a Drafts feature that allows users of the program to save drafts of their messages</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>
                    </p>
                </div>
            </div>
        )
    }
}

export default WhatsApp;