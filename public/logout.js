//////////START OF Logout FUNCTION//////////
function Logout(){
    const ctx = React.useContext(UserContext);

    var firebaseConfig = {
        apiKey: "AIzaSyCGSxC8AK6ifFjPgTLXOHXNUzV6PJeq4H8",
        authDomain: "bankingapp-c79aa.firebaseapp.com",
        projectId: "bankingapp-c79aa",
        storageBucket: "bankingapp-c79aa.appspot.com",
        messagingSenderId: "197131504320",
        appId: "1:197131504320:web:cf3cecc294712dc8e3bb25"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      (async () => {
        try {
            firebase.initializeApp(firebaseConfig);
            //if user is logged in, it persists through refreshes, this eliminates that issue
            await firebase.auth().signOut();
            const createUserResult = await firebase
                .auth()
                .createUserWithEmailAndPassword("example@mit.edu", "secret")
                console.log('createUserResult', createUserResult)
            firebase.auth().signOut();
        } catch(e) {
            console.log(e);
        }
    })();
    
      function handleLogout(){
                
        firebase.auth().signOut();
        
      };
    
    return (
        <>
        <button type="submit" 
        className="btn btn-light" 
        onClick={handleLogout}>
          Logout
      </button>
    
      </>);  
  }
  //////////END OF Logout FUNCTION//////////