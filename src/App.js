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
import styles from "./style.module.scss";

function App() {
  const width = 18;
  const height = 18;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.header}>دسته ها</div>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Home width={width} height={height} className="symbmol" />
          </div>
          <span className={styles.icon_text}>املاک</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Vehicle width={width} height={height} />
          </div>
          <span className={styles.icon_text}>وسایل نقلیه</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <CellPhone width={width} height={height} />
          </div>
          <span className={styles.icon_text}>کالای دیجیتال</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Lamp width={width} height={height} />
          </div>
          <span className={styles.icon_text}>خانه و آشپزخانه</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Brush width={width} height={height} />
          </div>
          <span className={styles.icon_text}>خدمات</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Watch width={width} height={height} />
          </div>
          <span className={styles.icon_text}>وسایل شخصی</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Dice width={width} height={height} />
          </div>
          <span className={styles.icon_text}>سرگرمی و فراغت</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Social width={width} height={height} />
          </div>
          <span className={styles.icon_text}>اجتماعی</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Chair width={width} height={height} />
          </div>
          <span className={styles.icon_text}>تجهیزات صنعتی</span>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Bag width={width} height={height} />
          </div>
          <span className={styles.icon_text}>استخدام و کاریابی</span>
        </div>
      </div>
    </div>
  );
}

export default App;
