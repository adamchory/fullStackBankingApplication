//////////START: Activity function//////////
function Activity(){
  const ctx = React.useContext(transactionContext);

  /////START: function to map data into a table row/////
  const ActivityList = ({transactions}) => {
    const newRow = transactions.map((item, index) => {
      return (
        <tr key={index}>
          <td className="text-center">{item.name}</td>
          <td className="text-center">{item.amount}</td>
          <td className="text-center">{item.type}</td>
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
      header="BadBank Activity"
      body={
      <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th className="text-success text-center font-weight-bold">Name</th>
          <th className="text-success text-center font-weight-bold">Amount</th>
          <th className="text-success text-center font-weight-bold">Transaction Type</th>
          <th className="text-success text-center font-weight-bold">Current Balance</th>
        </tr>
      </thead>
      <tbody>
      <ActivityList transactions={ctx.transactions} />
      </tbody>
    </table>}
    />  
      
    
    </>
  )
}
//////////END: Activity function//////////
