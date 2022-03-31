//////////START: All Data function//////////
function AllData(){
  const [data, setData] = React.useState('');  

  React.useEffect(() => {
        
    // fetch all accounts from API
    fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(JSON.stringify(data));            
        });

}, []);
  /////START: function to map data into a table row/////
  const UserData = ({users}) => {
    const newRow = users.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td className="text-center">{`$${item.balance}`}</td>
      </tr>
      )
    });
    return newRow;
  };
  /////END: function to map data into a table row/////

  return (
    <>
      <Card
      txtcolor="black"
      header="User Data"
      body={
      <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th className="text-success font-weight-bold">Name</th>
          <th className="text-success font-weight-bold">Email</th>
          <th className="text-success font-weight-bold">Password</th>
          <th className="text-success text-center font-weight-bold">Current Balance</th>
        </tr>
      </thead>
      <tbody>
      <UserData users={data} />
      </tbody>
    </table>}
    />  
      
    
    </>
  );
}
//////////END: All data function//////////
