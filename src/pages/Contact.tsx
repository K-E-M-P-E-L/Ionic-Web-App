import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter,
    IonBackButton,IonButtons } from '@ionic/react';
    import ContactContent from '../components/ContactContent'

const Contact = () => {
     return (
     <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                <IonBackButton />
                </IonButtons>
                <IonTitle>Contact</IonTitle>
            </IonToolbar>
        </IonHeader>
     <IonContent fullscreen>
    
     <ContactContent />
    
     </IonContent>
        <IonFooter>
            <IonToolbar>
                <IonTitle>bottom about</IonTitle>
            </IonToolbar>
        </IonFooter>
     </IonPage>
    );
};

export default Contact;