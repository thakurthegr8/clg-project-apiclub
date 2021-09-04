import React from 'react'
import Hero from "../assets/images/about-page-hero.jpeg"
const styles = {
    backgroundImage: `url(${Hero})`,
    minHeight: "20rem",
    backgroundSize: "cover",
    backgroundPosition:"center",backgroundAttachment:"fixed"
}
const About = () => {
    return (
        <div className="container mx-auto space-y-4">
            <div style={styles} className="mt-8 flex items-end">
                <div style={{height:"100%"}} className="p-8 w-full flex items-end bg-gradient-to-t from-black to-transparent">
                    <h1 className="text-5xl text-white font-bold lg:w-1/2 mt-8">Dedicated teams for your dedicated dreams</h1>
                </div>
            </div>
        </div>
    )
}
export default About;