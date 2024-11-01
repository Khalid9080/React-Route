
import './App.css'
// import Hook_Form from './Components/Hook_Form/Hook_Form'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import Ref_Form from './Components/Ref_Form/Ref_Form'
// import State_Form from './Components/State_Form/State_Form'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit= data =>{
    console.log('Sign Up Data', data);
  }

const handleUpdateProfile = data => {
  console.log('Update Profile Data',data);
}

  return (

    /* 
    --> Form submit korle ekta event handler add hobe

    */
    <>
    
      <h1>Basic Form</h1>
      {/* <SimpleForm /> */}
      {/* <State_Form></State_Form> */}
      {/* <Ref_Form></Ref_Form> */}
      {/* <Hook_Form></Hook_Form> */}
      <ReusableForm formTitle={'Sign UP'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign UP</h2>
          <p>Please signup right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText={'Update'}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReusableForm>


    
    </>
  )
}

export default App
