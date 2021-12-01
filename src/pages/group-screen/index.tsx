import { IonButton, IonPage } from "@ionic/react";
import { Link } from "react-router-dom";
import "./styles.css";

const GroupScreen: React.FC = () => {
  return (
    <IonPage>
      <div className="groups-container">
        <Link className="cancel-btn" to="/">
          {"<"}
        </Link>
        <h5>Nome do grupo</h5>
        <button className="done-btn">+</button>
      </div>
      <IonButton
        color="danger"
        className="sort-button"
        shape="round"
        size="small"
      >
        Sortear
      </IonButton>
    </IonPage>
  );
};

export default GroupScreen;
