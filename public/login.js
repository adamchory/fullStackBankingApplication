function Login(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);
    const ctx                     = React.useContext(UserContext);
    const ctx_transaction         = React.useContext(transactionContext);
  
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


    function handleEmailChange (e) {
      setEmail((e.target.value));
        if (e.target.value.length <= 0) {
              setEmail('');
              console.log('email required');
              setStatus('Email Required');
              setTimeout(() => setStatus(''),3000);
              //errorID = 1;
              return setIsEmailValid(false);
        }
        else {
              return setIsEmailValid(true);
        }
  }
  
  function handlePasswordChange (e) {
    setPassword((e.target.value));
      if (e.target.value.length <= 0) {
            setPassword('');
            console.log('password required');
            setStatus('Password Required');
            setTimeout(() => setStatus(''),3000);
            //errorID = 1;
            return setIsPasswordValid(false);
      }
      else {
            return setIsPasswordValid(true);
      }
  }
  
  function handleCreate(){
    console.log(email,password);
    //console.log(ctx.users.length)
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(
      email.value,
      password.value
    );
    promise.catch((e) => console.log(e.message));

    fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });    
    setShow(false);
    
  }   
  
  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
    setStatus('')
    setIsMatching(false)
  } 
  
    return (
      <Card
      bgcolor="success"
      header="LogIn"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
              </>
            ):(
              <>
              <h5>{`Thanks ${email}, you successfully logged into your account`}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Login to another account</button>
              </>
            )}
    />
    )  
  }
  