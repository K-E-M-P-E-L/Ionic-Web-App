import { IonContent, IonHeader, IonPage,
    IonTitle, IonToolbar,IonFooter,IonBackButton,IonButtons} from '@ionic/react';
    import AboutContent from '../components/AboutContent'
    import { arrowBack } from 'ionicons/icons';
    const About = () => {
     return (
     <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton text="" icon = {arrowBack} />
                </IonButtons>
                <IonTitle>About</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        
            <AboutContent />
        </IonContent>
        <IonFooter>
            <IonToolbar>
                <IonTitle>bottom about</IonTitle>
            </IonToolbar>
        </IonFooter>
     </IonPage>
     );
    };
    export default About;