import robo1 from "../assets/robo1.jpeg";
import robo2 from "../assets/robo2.jpeg";
import robo3 from "../assets/robo3.jpeg";
import robo4 from "../assets/robo4.jpeg";
import robo5 from "../assets/robo5.jpeg";
import robo6 from "../assets/robo6.jpeg";
import robo7 from "../assets/robo7.jpeg";
import robo8 from "../assets/robo8.jpeg";
import robo9 from "../assets/robo9.jpeg";
import robo10 from "../assets/robo10.jpeg";
import "./Content.css";

const Content = () => {
    return (

        <div className="banner">
            <div className="slider" style={{ "--quantity": 10 }}>
                <div className="item" style={{ "--position": 1 }}>
                    <img src={robo1} alt="robo1" />
                </div>
                <div className="item" style={{ "--position": 2 }}>
                    <img src={robo2} alt="robo2" />
                </div>
                <div className="item" style={{ "--position": 3 }}>
                    <img src={robo3} alt="robo3" />
                </div>
                <div className="item" style={{ "--position": 4 }}>
                    <img src={robo4} alt="robo4" />
                </div>
                <div className="item" style={{ "--position": 5 }}>
                    <img src={robo5} alt="robo5" />
                </div>
                <div className="item" style={{ "--position": 6 }}>
                    <img src={robo6} alt="robo6" />
                </div>
                <div className="item" style={{ "--position": 7 }}>
                    <img src={robo7} alt="robo7" />
                </div>
                <div className="item" style={{ "--position": 8 }}>
                    <img src={robo8} alt="robo8" />
                </div>
                <div className="item" style={{ "--position": 9 }}>
                    <img src={robo9} alt="robo9" />
                </div>
                <div className="item" style={{ "--position": 10 }}>
                    <img src={robo10} alt="robo10" />
                </div>
            </div>
            <div className="content">
                <h1>ROBO MANIA</h1>
                <div className="model"></div>
            </div>
        </div>

    );
};

export default Content;
