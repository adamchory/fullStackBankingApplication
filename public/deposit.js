//////////START: Deposit Function//////////
function Deposit(){

  const ctx = React.useContext(UserContext);
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const [balance, setBalance] = React.useState(ctx.users[ctx.users.length - 1].balance);
  const [isValid, setIsValid] = React.useState(false);
  const ctx_transaction         = React.useContext(transactionContext);

  let errorID = 0; //initially no errors

  //////////START: Function to Handle changes in the deposit input box//////////
  function handleChange(e) {

    setDeposit((e.target.value));

    /////START: If the input is NaN/////
    if (isNaN(e.target.value)) {
      /////START: If the input is negative/////
      if (e.target.value === '-'){
        setDeposit('');
        setStatus('Deposits must be positive numbers');
        setTimeout(() => setStatus(''),3000);
        errorID = 1;
        return setIsValid(false);
      } 
      /////END: If the input is negative/////
      else {
        setDeposit('');
        setStatus('Deposits can only contain numbers');
        setTimeout(() => setStatus(''),3000);
        errorID = 2;
        return setIsValid(false);
      }
    } 
    /////END: If the input is NaN/////

    setDeposit(Number(e.target.value))

    /////START: If 0 is input first/////
    if (Number(e.target.value) === 0) {
      setDeposit('');
      setStatus('Field Required');
      setTimeout(() => setStatus(''),3000);
      errorID = 3;
      return setIsValid(false);
    } 
    /////END: If 0 is input first/////

    /////START: If there is no error/////
    if ( errorID < 1 ) {
      return setIsValid(true);
    }
    /////END: If there is no error/////
  }
  //////////END: Function to Handle changes in the input box//////////

  //////////START: Function to Handle deposit onClick event//////////
  function handleDeposit() {
    //ctx.users[ctx.users.length - 1].balance = balance + deposit;
    setBalance(balance + deposit);
    //ctx_transaction.transactions.push({name: ctx.users[ctx.users.length - 1].name, amount: deposit,type: 'Deposit', balance: ctx.users[ctx.users.length - 1].balance});
    fetch(`/account/update/${email}/${deposit}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
    setShow(false);
  }
//////////END: Function to Handle deposit onClick event//////////

//////////START: Function to clear deposit form//////////
  function clearForm(){
    setDeposit('');
    setShow(true);
    setIsValid(false);
    errorID = 0;
    console.log(ctx.users[ctx.users.length - 1].name + ' deposited ' + deposit + ' to get to ' + balance)
  }
//////////END: Function to clear deposit form//////////

  return (
    <Card
      bgcolor="success"
      header="Deposit Form"
      title={`${ctx.users[ctx.users.length - 1].name}, your current balance is $${ctx.users[ctx.users.length - 1].balance}`}
      status={status}
      body={show ? (  
              <>
              Deposit Amount<br/>
              <input type="input" className="form-control" id="deposit" placeholder="Enter Deposit Amount" value={deposit} onChange={handleChange} /><br/>
              <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={!isValid}>Make Deposit</button>
              </>
            ):(
              <>
              <h5 className="font-italic">You successfully made a ${deposit} deposit</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
              </>
            )}
    />
  )
}
//////////END: Deposit Function//////////