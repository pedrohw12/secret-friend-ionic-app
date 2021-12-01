import { IonButton, IonContent, IonPage, useIonModal } from "@ionic/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Body: React.FC<{
  onSubmit: () => void;
  onDismiss: () => void;
  onChangeGroupName: (e: any) => void;
  onChangeGroupDescription: (e: any) => void;
  groupName: string;
}> = ({
  onDismiss,
  onSubmit,
  onChangeGroupName,
  onChangeGroupDescription,
  groupName,
}) => (
  <div>
    <div className="groups-container">
      <button className="cancel-btn" onClick={() => onDismiss()}>
        Cancelar
      </button>
      <h5>Novo Grupo</h5>
      <button
        disabled={!groupName}
        className="done-btn"
        onClick={() => onSubmit()}
      >
        Concluir
      </button>
    </div>
    <div className="inputs-area">
      <input
        className="name-input"
        placeholder="Nome do grupo"
        onChange={(e) => onChangeGroupName(e)}
      />
      <textarea
        className="description-input"
        placeholder="Descriçāo (opcional)"
        onChange={(e) => onChangeGroupDescription(e)}
      />
    </div>
  </div>
);

const Home: React.FC = () => {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groups, setGroups] = useState<Array<any>>([]);

  const handleDismiss = () => {
    dismiss();
  };
  const [present, dismiss] = useIonModal(Body, {
    onDismiss: handleDismiss,
    onChangeGroupName: (e: any) => setGroupName(e.target.value),
    onChangeGroupDescription: (e: any) => setGroupDescription(e.target.value),
    groupName: groupName,
    onSubmit: () => [setGroups([...groups, groupName]), handleDismiss()],
  });
  return (
    <IonPage className="page-container">
      <div className="content">
        <div className="groups-container">
          <h1 className="title">Grupos</h1>
          <IonButton
            onClick={() => {
              present({
                cssClass: "my-class",
              });
            }}
            shape="round"
            size="small"
          >
            +
          </IonButton>
        </div>

        <div className="empty-list-container">
          {groups.length ? (
            <IonContent className="group-card-container">
              {groups.map((group, index) => (
                <Link to='/group-screen' className="group-card">
                  <p key={index}>{group}</p>
                </Link>
              ))}
            </IonContent>
          ) : (
            <p className="empty-list-message">
              Toque no + para criar um novo grupo de Amigo Secreto
            </p>
          )}
        </div>
      </div>
    </IonPage>
  );
};

export default Home;
