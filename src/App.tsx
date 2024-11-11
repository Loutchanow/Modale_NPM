import Modale from './component/Modale'

function App() {

const actionOne = ()=>{
  console.log("action1");
  
}

const actionTwo = ()=>{
  console.log("action2");
  
}

  return (
    <Modale open={true} message={"Le message"} title={"Titre"} actionButtonOne={actionOne} actionButtonTwo={actionTwo} bordercolor='white' backgroundcolor='black' textcolor='white' labelButtonOne='Fermer' labelButtonTwo={"Voir"} />
  )
}

export default App
