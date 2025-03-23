import { useEffect } from 'react';
import '@/components/opening.css';
import { Scene, SceneOptions } from 'react-scenejs';
import Shape from '@/components/Shape';

const Opening = () => {

  useEffect(() => {
    const motionElement = document.getElementById('motion');
    const logoElement = document.getElementById('logo');
    if (motionElement) {
      // console.log(motionElement);
      motionElement.style.opacity = '1';
      setTimeout(() => {
        motionElement.style.opacity = '0';
      }, 11000);
    }
    if (logoElement) {
      // console.log(logoElement);
      logoElement.style.display = 'block';
      setTimeout(() => {
        logoElement.style.display = 'none';
      }, 11000);
    }

    // 애니메이션 설정
    const mainScene = new Scene({
      ".line-top": {
        0: { transform: "translateY(-100%) scaleY(1)" },
        1: { transform: "translateY(0%) scaleY(0)" },
        options: { easing: "ease-in" },
      },
      ".circle1": {
        0: { "border-width": "100px", "transform": "scale(0)" },
        0.9: { opacity: 1 },
        1: { "border-width": "0px", "transform": "scale(1)", "opacity": 0 },
        options: { delay: 1 },
      },
      ".circle2": {
        0: { "border-width": "200px", "transform": "scale(0)", },
        0.3: { opacity: 1, },
        0.9: { "border-width": "0px", "transform": "scale(1)", "opacity": 0, },
        2: 1,
        options: { delay: 1.6, },
      },
      ".rectangle": {
        0: { opacity: 0, transform: "translate(-50%, -50%) rotate(30deg) translate(0px) scale(0.3)", },
        0.1: { opacity: 1, },
        1: { opacity: 1, },
        1.5: { transform: "rotate(0deg) translate(-100px) scale(1)", opacity: 0, },
        options: { delay: 2, },
      },
      ".star5": {
        0: { opacity: 0, transform: "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(0.3)", },
        0.1: { opacity: 1, },
        1: { opacity: 1, },
        1.5: { transform: "rotate(150deg) translate(-5px, -98px) scale(1)", opacity: 0, },
        options: { delay: 2, },
      },
      ".circle3": {
        0: { opacity: 0, transform: "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(0.3)", },
        0.1: { opacity: 1, },
        1: { opacity: 1, },
        1.5: { transform: "rotate(150deg) translate(95px, -40px) scale(1)", opacity: 0, },
        options: { delay: 2, },
      },
      ".polygon6": {
        0: { opacity: 0, transform: "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(0.3)", },
        0.1: { opacity: 1, },
        1: { opacity: 1, },
        1.5: { transform: "rotate(150deg) translate(75px, 75px) scale(1)", opacity: 0, },
        options: { delay: 2, },
      },
      ".triangle": {
        0: { opacity: 0, transform: "translate(-50%, -50%) translate(0px, 0px) rotate(0deg) scale(0.3)", },
        0.1: { opacity: 1, },
        1: { opacity: 1, },
        1.5: { transform: "rotate(-150deg) translate(-40px, 90px) scale(1)", opacity: 0, },
        options: { delay: 2, },
      },
      ".d-back": (i: number) => ({
        transform: { scaleX: [0, 1], },
        options: { duration: 1, delay: 2.8 + i * 0.2, },
      }),
      ".character span": (i: number) => ({
        0: { transform: "translate(-100%)", },
        1: { transform: "translate(0%)", },
        options: { delay: 3.1 + i * 0.2, },
      }),
      ".glitter": (i: number) => ({
        0: { width: "0px", transform: { rotate: `${360 / 8 * i}deg`, translate: "0px", scaleX: 1, }, opacity: 0, },
        0.5: { width: "50px", opacity: 1, },
        1: { width: "0px", transform: { translate: "100px", scaleX: 0, }, opacity: 0, },
        options: { delay: 1, },
      }),
      } as Record<string, any>, {
      easing: "ease-out",
      selector: true,
      iterationCount: "infinite",
    } as SceneOptions);

    mainScene.playCSS();

    // 컴포넌트 언마운트 시 클린업
    return () => {
      // 필요한 경우 클린업 코드 추가
    };
  }, []);

  return (
    <div id="opening">
      <div className="line-top"></div>
      <div className="shape rectangle"></div>
      <div className="shape triangle" data-stroke="#ccc" data-stroke-width="2px">
        {Shape.poly({ side: 3, width: 50, stroke: "#ccc", strokeWidth: 2 })}
      </div>
      <div className="shape circle3"></div>
      <div className="shape star5" data-side="5" data-stroke="#ccc" data-stroke-width="2px" data-star-radius="50%">
        {Shape.star({ side: 5, width: 50, stroke: "#ccc", strokeWidth: 2 })}
      </div>
      <div className="shape polygon6" data-side="6" data-stroke="#ccc" data-stroke-width="2px">
        {Shape.poly({ side: 6, width: 50, stroke: "#ccc", strokeWidth: 2 })}
      </div>

      <div className="motion" id="motion">
        <div className="glitter glitter1"></div>
        <div className="glitter glitter2"></div>
        <div className="glitter glitter3"></div>
        <div className="glitter glitter4"></div>
        <div className="glitter glitter5"></div>
        <div className="glitter glitter6"></div>
        <div className="glitter glitter7"></div>
        <div className="glitter glitter8"></div>
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>
      <div className="logo" id="logo">
        <div className="character d">
          <div className="d-back back1"></div>
          <div className="d-back back2"></div>
          <span>W</span>
        </div>
        <div className="character a"><span>e'</span></div>
        <div className="character y"><span>r</span></div>
        <div className="character b"><span>e</span></div>
        <div className="character b"><span></span></div>
        <div className="character b"><span></span></div>
        <div className="character b"><span></span></div>
        <br/>
        <div className="character d">
          <div className="d-back back1"></div>
          <div className="d-back back2"></div>
          <span>g</span>
        </div>
        <div className="character u"><span>e</span></div>
        <div className="character s"><span>t</span></div>
        <div className="character h"><span>t</span></div>
        <div className="character h"><span>i</span></div>
        <div className="character h"><span>n</span></div>
        <div className="character h"><span>g</span></div>
        <br/>
        <div className="character d">
          <div className="d-back back1"></div>
          <div className="d-back back2"></div>
          <span>m</span>
        </div>
        <div className="character h"><span>a</span></div>
        <div className="character h"><span>r</span></div>
        <div className="character h"><span>r</span></div>
        <div className="character h"><span>i</span></div>
        <div className="character h"><span>e</span></div>
        <div className="character h"><span>d</span></div>
      </div>
      {/* <MainTitle>{greeting.title}</MainTitle> */}
      {/* <SubTitle>{greeting.eventDetail}</SubTitle> */}
    </div>
  );
};

export default Opening;

// const OpeningBorder = styled.div`
//   border: 1px solid red;
// `;

