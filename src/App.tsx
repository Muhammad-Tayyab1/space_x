import React from 'react';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';
import './App.css';
import NavBar from './NavBar/NavBar';
import firebase from './FireBaseWork/firebase';

const App = () => {
  const messaging=firebase.messaging();
  Notification.requestPermission().then((permission) => { 
      console.log(permission) 
      if(permission === "granted"){
          messaging.getToken().then((currentToken: any) => {
              if (currentToken) {
                  console.log("TOKEN")
                  console.log(currentToken);
              } else {
                console.log('No Instance ID token available. Request permission to generate one.');

              }
            }).catch((err:any) => {
              console.log('An error occurred while retrieving token. ', err);
            });
      }

  })
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback((newId:any) => {
    setId(newId);
  }, []);

  return (
    <div>
      <div><NavBar/></div>
    <div className="App">
      <LaunchList handleIdChange={handleIdChange}/>
      <LaunchDetails id={id} />
    </div>
    </div>
  );
};

export default App;
