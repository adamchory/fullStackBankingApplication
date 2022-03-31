//////////START OF HOME FUNCTION//////////
function Balance(){
    const ctx = React.useContext(UserContext);
    
    return (
      <Card
        txtcolor="black"
        header="BadBank Home Page"
        title={`Welcome, ${ctx.users[ctx.users.length - 1].name}`}
        text="You can use the navigation bar to create a new account, make withdrawals, deposits, or view past transactions"
        body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      />    
    );  
  }
  //////////END OF HOME FUNCTION//////////