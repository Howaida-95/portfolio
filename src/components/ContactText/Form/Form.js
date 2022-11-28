import React, {useState} from 'react';
import useForm from './useForm';
import Axios from 'axios';
import Loader from './../../shared/Loader';
function Form() {
  // Define your state schema
  const stateSchema = {
    name: { value: '', error: '' },
    email: { value: '', error: ''},
    subject: { value: '', error: ''},
    message: { value: '', error: ''},
  };
  // loading & message appearing after form sent 
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
// Define your validationStateSchema
  // Note: validationStateSchema and stateSchema property
  // should be the same in-order validation works!
  const validationStateSchema = {
    name: {
      required: false,
    },
    email: {
      required: true,
      validator: {
        regEx: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        error: 'Invalid email.',
      },
    },
    subject: {
      required: false,
    },
    message: {
      required: true,
    },
  };
function onSubmitForm(state, setState) {
  const infoData = {};
  for(let key in state){
    infoData[key] = state[key].value; // key: value , here we only care for value
  }
  const info = {
    formData: infoData
  }
  setLoading(true);
  Axios.post(`https://portfolio-b5f9f-default-rtdb.firebaseio.com/contctForm.json`, info)
    .then(res => {
      setLoading(false);
      setMsg('Message sent successfully');
      setTimeout(() => { // to remove the ms after appearing
        setMsg('');
      }, 2000);
      setState(stateSchema); // reset state info
    })
    .catch(err => {
      setMsg('Network error , reload and try again');
    })
}
const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

// setting classname dynamically 
let nameStyle = ['col-lg-6', 'pr-lg-2', 'mb-2','focus-border'];
let emailStyle = ['col-lg-6', 'mb-2', 'focus-border'];
let subjectStyle = ['col', 'focus-border'];
let msgStyle = ['col', 'focus-border'];
if(state.name.error){nameStyle.push('error')}
if(state.email.error){emailStyle.push('error')}
if(state.subject.error){subjectStyle.push('error')}
if(state.message.error){msgStyle.push('error')}
let reqMsg = [];
if(msg === 'Message sent successfully'){reqMsg.push('success')}
if(msg === 'Network error , reload and try again'){reqMsg.push('danger')}
let form;
if(loading){
  form = <Loader />
}
form = 
  <>
    {msg?<p className = {reqMsg.join(' ')}>{msg}</p>
    :<form onSubmit={handleOnSubmit}>
  {/* ------------ 1st row ---------------*/}
      <div className = 'row no-gutters'>
        {/* first col*/}
        <div className = {nameStyle.join(' ')}>
          <input
            placeholder = 'Name'
            type="text"
            name="name"
            value={state.name.value}
            onChange={handleOnChange}
            autoComplete = 'off'/>
        </div>
      {/* second col*/}
        <div className = {emailStyle.join(' ')}>
          <input
            placeholder = 'Email'
            type="email"
            name="email"
            value={state.email.value}
            onChange={handleOnChange}
            autoComplete = 'off'/>
        </div>
      </div>
  {/* ------------ 2nd row ---------------*/}
      <div className = 'row mb-2'>
        <div className = {subjectStyle.join(' ')}>
          <input
            placeholder = 'Subject'
            type="text"
            name="subject"
            value={state.subject.value}
            onChange={handleOnChange}
            autoComplete = 'off'/>
        </div>
      </div>    
  {/* ------------ 3rd row ---------------*/}
      <div className = 'row mb-4'>
        <div className = {msgStyle.join(' ')}>
          <textarea
            placeholder = 'Message'
            type="text"
            name="message"
            value={state.message.value}
            onChange={handleOnChange}/>
        </div>
      </div>
  {/* ----------- submit btn ------------ */}
      <div className = 'row'>
        <div className = 'col-auto ml-auto'>
          <input 
          type="submit" 
          name="submit" 
          value ='send' 
          className = 'btn' 
          disabled={disable} />
        </div>
    </div>    
    </form>
    }
  </>  
return form

}
export default Form;