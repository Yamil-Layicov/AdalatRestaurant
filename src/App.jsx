import { useRoutes } from "react-router-dom";
import routes from "./routes/Routes";
import {useMultistepForm} from './hooks/useMultiStepForm'
import { ChooseResName } from "./hooks/ChooseResName";
import { AddressForm } from "./hooks/AddressForm";
import { TimePeople } from "./hooks/TimePeople";
import { useState } from "react";


const INITIAL_DATA = {
  resName:"",
  currentDate:[],
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

const App = () => {

  const [activeResName, setActiveResName] = useState(null);
  const [activeDayData, setActiveDayData] = useState(null);


  const [data, setData] = useState(INITIAL_DATA)
  console.log(data);


  function updateFields(fields){
    setData(prev => {
      return {...prev, ...fields}
    })
  }

  const {steps, currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <ChooseResName {...data} updateFields={updateFields} activeResName={activeResName} setActiveResName={setActiveResName} />,  
    <AddressForm {...data} updateFields={updateFields} activeDayData={activeDayData} setActiveDayData={setActiveDayData}/>,
    <TimePeople {...data} updateFields={updateFields}/>
  ])

  function onSubmit(e){
    e.preventDefault()
    if(!isLastStep) return next()
    
  }

  return (
    <>   

     {/* {useRoutes(routes)} */}


     <div style={{
      position:"relative",
      background:"white",
      border:"1px solid black",
      padding:"2rem",
      margin:"1rem",
      borderRadius:".5rem",
      fontFamily:"Arial",
      // maxWidth:"max-content"
     }}>   

      <form onSubmit={onSubmit}>
        <div style={{position:"absolute", top:".5rem", right:".5rem"}}>
         {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{
          marginTop:"1rem",
          display:"flex",
          gap:".5rem",
          justifyContent:"flex-end"
        }}>
          { !isFirstStep && <button type="button" onClick={back}>Back</button> }
          { activeDayData !== "" && <button type="submit">{isLastStep ? "Finish" : "Next"}</button> }
        </div>
      </form>
     </div>
    </>
  )
}

export default App