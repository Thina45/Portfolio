import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
  const sectionRef = useRef(null);
  const project1 = useRef(null);
  const project2 = useRef(null);
  const project3 = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [project1.current, project2.current, project3.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={project1} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/PG ADMISSION.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>Seamless PG Admissions at Your Fingertips</h2>
              <p className="text-white-50 md:text-xl">
                Simplify your postgraduate journey with our mobile app. Track
                applications, explore universities, and manage your admissions
                process anytime, anywhere — all from your phone.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/Blog.png" alt="Blog" />
              </div>
              <h2>THE BLOG APP</h2>
            </div>

            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/CrowScape.png" alt="CrowScape" />
              </div>
              <h2>CROWSCAPE</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
