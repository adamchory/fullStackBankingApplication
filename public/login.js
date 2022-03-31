function Login(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isEmailValid, setIsEmailValid] = React.useState(false);
    const [isPasswordValid, setIsPasswordValid] = React.useState(false);
    const ctx                     = React.useContext(UserContext);
    const ctx_transaction         = React.useContext(transactionContext);
  
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
    console.log(ctx.users.length)
    
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
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!isMatching}>Login</button>
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
  