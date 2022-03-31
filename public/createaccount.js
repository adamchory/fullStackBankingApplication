//////////START: CREATE ACCOUNT function//////////
function CreateAccount(){
        
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const ctx                     = React.useContext(UserContext);
  const ctx_transaction         = React.useContext(transactionContext);

/////START:function to handle changes in the name input box/////
  function handleNameChange (e) {
        setName((e.target.value));
        /////START: If nothing is entered/////
          if (e.target.value.length <= 0) {
                setName('');
                setStatus('Name Required');
                setTimeout(() => setStatus(''),3000);
                return setIsNameValid(false);
          }
          /////END: If nothing is entered/////

          /////START: If something has been entered/////
          else {
                return setIsNameValid(true);
          }
          /////END: If something has been entered/////
  }
/////END:function to handle changes in the name input box/////

/////START:function to handle changes in the email input box/////
  function handleEmailChange (e) {
        setEmail((e.target.value));
        /////START: If nothing is entered/////
          if (e.target.value.length <= 0) {
                setEmail('');
                setStatus('Email Required');
                setTimeout(() => setStatus(''),3000);
                return setIsEmailValid(false);
          }
          /////END: If nothing is entered/////

          /////START: If something has been entered/////
          else {
                return setIsEmailValid(true);
          }
          /////END: If something has been entered/////
  }
/////END:function to handle changes in the email input box/////

/////START:function to handle changes in the password input box/////
  function handlePasswordChange (e) {
        setPassword((e.target.value));
          /////START: If nothing is entered/////
          if (e.target.value.length <= 0) {
                setPassword('');
                setStatus('Password Required');
                setTimeout(() => setStatus(''),3000);
                return setIsPasswordValid(false);
          }
          /////END: If nothing is entered/////

          /////START: If password is under 8 characters/////
          if (e.target.value.length<8){
                setStatus('Password must be atleast 8 characters');
                setTimeout(() => setStatus(''),3000);
                return setIsPasswordValid(false);
          }
          /////END: If password is under 8 characters/////

          /////START: If password tests pass/////
          else {
                return setIsPasswordValid(true);
          }
          /////END: If password tests pass/////
  }
  /////END:function to handle changes in the password input box/////


  //////////START: function to create account after validation passes//////////
  function handleCreate(){
    console.log(name,email,password);
            
        // ctx.users.push({name,email,password,balance:100});
        // ctx_transaction.transactions.push({name,amount: 100,type: 'On Signup', balance:100});
        // setShow(false);

        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
        var res  = await fetch(url);
        var data = await res.json();  

        console.log(data);        
    })();
    setShow(false);
    
  }    
  //////////END: function to create account after validation passes//////////


  //////////START: CLEARFORM function//////////
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
  //////////END: CLEARFORM function//////////


  return (
    <Card
      bgcolor="success"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={handleNameChange} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!isNameValid || !isEmailValid || !isPasswordValid}>Create Account</button>
              </>
            ):(
              <>
              <h5>{`Thanks ${name}, you successfully created an account`}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Create Another Account</button>
              </>
            )}
    />
  )
}
//////////END: CREATE ACCOUNT function//////////