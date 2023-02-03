import React, {useContext, useRef, useState} from 'react';
import {UserContext, UserContextProvider} from '../context/userContext';
import {useNavigate} from "react-router-dom";


export default function SignInModal(){
    const { modalState, toggleModals, signIn } = useContext(UserContext);
    const navigate = useNavigate();
    
    

    const[validation, setValidation] = useState("");

    const inputs = useRef([])
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    const formRef = useRef();

    const handleForm = async e => {
        e.preventDefault();



        try{
            const cred = await signIn(inputs.current[0].value, inputs.current[1].value)
            //formRef.current.reset();
            setValidation("");
            navigate("/welcome")
        }catch {
            setValidation("Invalid email or password");

        }
        const closeModal = () => {
            setValidation("");
            toggleModals("close")
        }
    
}
    
    return <div>
        <form ref = {formRef} onSubmit={handleForm} className="sign-up-form">
            <div className="form-group">
                <div>
                <label htmlFor="signInEmail">Email address</label>
                <input ref={addInputs} type="email" className="form-control" id="signInEmail"  placeholder="Enter email" />
                </div>
                <div>
                <label  htmlFor="signInPwd">Password</label>
                <input ref={addInputs} type="password" className="form-control" id="signInPwd"  placeholder="Enter password" />
                <p className="text-danger mt-1">{validation}</p>
                </div>
                
                <button>Submit</button>
            </div>
        </form>

    </div>
    }