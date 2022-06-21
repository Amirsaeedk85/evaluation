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
          <div className={styles.heading_1}>دسته ها</div>
        </div>

        <div className={styles.row}>
          <div className={styles.heading}>&rarr; همه آگهی ها</div>
        </div>

        <div className={styles.row}>
          <div className={styles.icon_symbol}>
            <Home width={width} height={height} />
          </div>
          <span className={styles.icon_text}>املاک</span>
        </div>

        <div className={styles.row_1}>
          <span className={styles.icon_text}>اجاره مسکونی</span>

          <div className={styles.row_2}>
            <div className={styles.row_line}></div>
            <span className={styles.icon_text_2}>آپارتمان</span>
          </div>

          <div className={styles.row_2}>
            <div className={styles.row_line_active}></div>
            <span className={styles.icon_text_2_active}>خانه و ویلا</span>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
