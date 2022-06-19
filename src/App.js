import { ReactComponent as Bag } from "./assets/bag-1-svgrepo-com.svg";
import { ReactComponent as Brush } from "./assets/brush-svgrepo-com.svg";
import { ReactComponent as CellPhone } from "./assets/cellphone-svgrepo-com.svg";
import { ReactComponent as Home } from "./assets/home-svgrepo-com.svg";
import { ReactComponent as Lamp } from "./assets/lamps-furniture-and-household-svgrepo-com.svg";
import { ReactComponent as Chair } from "./assets/office-chair-svgrepo-com.svg";
import { ReactComponent as Social } from "./assets/social-group-svgrepo-com.svg";
import { ReactComponent as Dice } from "./assets/two-dices-svgrepo-com.svg";
import { ReactComponent as Vehicle } from "./assets/vehicle-car-svgrepo-com.svg";
import { ReactComponent as Watch } from "./assets/watch-svgrepo-com.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <span className="icon-text">املاک</span>
          <div className="icon">
            <Home width={20} height={20} />
          </div>
        </div>
        <div className="row">
          <span className="icon-text">وسایل نقلیه</span>
          <Vehicle width={20} height={20} />
        </div>
        <div className="row">
          <span className="icon-text">کالای دیجیتال</span>
          <CellPhone width={20} height={20} />
        </div>
        <div className="row">
          <span className="icon-text">خانه و آشپزخانه</span>
          <Lamp width={20} height={20} />
        </div>
        <div className="row">
          <span className="icon-text">خدمات</span>
          <Brush width={20} height={20} />
        </div>
        <div className="row">
          <span className="icon-text">وسایل شخصی</span>
          <Watch width={20} height={20} />
        </div>
        <div className="row">
          <span className="icon-text">سرگرمی و فراغت</span>
          <Dice width={20} height={20} />
        </div>
        <div className="row">
          <span className="icon-text">اجتماعی</span>
          <Social width={20} height={20} />
        </div>
        <div className="row">
          <span className="icon-text">تجهیزات صنعتی</span>
          <Chair width={20} height={20} />
        </div>
        <div className="row">
          <span className="icon-text">استخدام و کاریابی</span>
          <Bag width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default App;
