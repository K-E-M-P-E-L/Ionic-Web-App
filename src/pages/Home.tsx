import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonFooter } from '@ionic/react';


 import './Home.css';

 
 const Home = () => {


  const myArrayLink = ["/about", "contact"];
  const myArrayText = ["About", "Contact"];
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ninja</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent fullscreen>
    <IonList>
      {myArrayLink.map((comp, index) => {
      return (
        <IonItem routerLink={comp} key={index}>
          {myArrayText[index]}
        </IonItem>
      )})}
    </IonList>
  
    </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle>Call for Ninja</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
 };

 export default Home;