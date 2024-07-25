import { gsap } from "gsap";
import "./styles.css";
import { useGSAP } from "@gsap/react";

function Cube() {
    const timeline = gsap.timeline({
      repeat: -1, repeatDelay: 1, yoyo: true,
    });

    useGSAP(() =>{
      timeline.to('.cube', {
        x: 250,
        rotation: 360,
        duration: 2,
        ease: 'bounce.in',
        borderRadius: 20,
      })

      timeline.to('.cube', {
        x: 150,
        rotation: 200,
        duration: 2,
        ease: 'bounce.in',
        borderRadius: 900,
      })
    }, []);
   
    const mouseHover = () => {timeline.play()};
    const mouseOut = () => {timeline.pause()}

  return (
    <div className="cube" onMouseOver={mouseHover}  onMouseOut={mouseOut}> </div>
  );
}

export default Cube;
