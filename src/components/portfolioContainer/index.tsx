import { gsap } from "gsap";
import "./styles.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import phoneImage from '../../assets/Phone.png';
import React from "react";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);


const dataPortfolio = [
    {
        id: 'projectOne',
        title: 'Project One',
        goal: 'Achieve a robust and scalable solution for X.',
        role: 'Lead Developer',
    },
    {
        id: 'projectTwo',
        title: 'Project Two',
        goal: 'Improve user experience for Y.',
        role: 'UI/UX Designer',
    },
   
    {
        id: 'projectThree',
        title: 'Project Three',
        goal: 'Develop an innovative approach for Z.',
        role: 'Project Manager',
    },

    {
        id: 'projectFour',
        title: 'Project Four',
        goal: 'Develop an innovative approach for Z.',
        role: 'Project Manager',
    },
];

function PortfolioContainer() {
    // Create an array of refs for each project
    const parentRefs = useRef([]);
    const circleRefs = useRef([]);
    const triangleRefs = useRef([]);
    const squareTwoRefs = useRef([]);
    const [button,setButton] = useState(false);



    parentRefs.current = dataPortfolio.map((_, i) => parentRefs.current[i] ?? React.createRef());
    circleRefs.current = dataPortfolio.map((_, i) => circleRefs.current[i] ?? React.createRef());
    triangleRefs.current = dataPortfolio.map((_, i) => triangleRefs.current[i] ?? React.createRef());
    squareTwoRefs.current = dataPortfolio.map((_, i) => squareTwoRefs.current[i] ?? React.createRef());

    useGSAP(() => {
        dataPortfolio.forEach((_, i) => {
            const parentRef = parentRefs.current[i];
            const circleRef = circleRefs.current[i];
            const triangleRef = triangleRefs.current[i];
            const squareTwoRef = squareTwoRefs.current[i];


            gsap.fromTo(circleRef.current, {
                x: 550,
                y: 100,
                width: 10,
                height: 50,
                rotate: 0,
                scale: 1,
                opacity: 0,
                scrub: 2,
                borderRadius: 0,
            },
            {
                x: 216,
                width: 250,
                height: 190,
                y: 214,
                rotate: 0,
                scale: 2.5,
                opacity: 1,
                borderRadius: 20,
                scrollTrigger: {
                    trigger: parentRef.current,
                    start: 'top 95%',
                    end: 'bottom 55%',
                    scrub: true,
                }
            });

            gsap.fromTo(triangleRef.current, {
                x: -300,
                rotate: 5,
                scale: 1,
                opacity: 0,
                width: 20,
                borderRadius: 0,
            },
            {
                x: -155,
                y: 180,
                width: 150,
                rotate: 0,
                scale: 2,
                opacity: 1,
                scrub: 6,
                borderRadius: 20,
                scrollTrigger: {
                    trigger: parentRef.current,
                    start: 'top 75%',
                    end: 'bottom 45%',
                    scrub: true,
                }
            });

            gsap.fromTo(squareTwoRef.current, {
                x: -400,
                width: 20,
                rotate: 2,
                scale: 1,
                opacity: 0,
                scrub: 6,
                borderRadius: 0,
            },
            {
                x: -100,
                y: 350,
                width: 150,
                rotate: 0,
                scale: 2,
                opacity: 1,
                borderRadius: 20,
                scrollTrigger: {
                    trigger: parentRef.current,
                    start: 'top 70%',
                    end: 'bottom 42%',
                    scrub: true,
                }
            });
        });
    }, []);

    return (
        <>
            {dataPortfolio.map((project, i) => (
                <div key={project.id} className="mainContainer">
                    <div className="textContent">
                        <h1>{project.title}</h1>
                    </div>
                    <div className="parent-container" ref={parentRefs.current[i]} onMouseOver={() =>{
                        setButton(true)
                    }} onMouseOut={() => {
                        setButton(false)
                    }}>
                        <div className="circle" ref={circleRefs.current[i]}>
                            <img className="phoneImage" src={phoneImage} alt="Phone" />
                        </div>
                        <div className="triangle" ref={triangleRefs.current[i]}>
                            <h2 className="goals"> Goals</h2>
                            <h3 className="subtitles"> {project.goal}</h3>
                        </div>
                        <div className="squareTwo" ref={squareTwoRefs.current[i]}>
                            <h2 className="goals"> Role</h2>
                            <h3 className="subtitles"> {project.role}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default PortfolioContainer;
