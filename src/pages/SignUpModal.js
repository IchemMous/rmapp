import React, {useContext, useRef, useState} from 'react';
import {UserContext, UserContextProvider} from '../context/userContext';
import { Navigate, useNavigate } from 'react-router-dom';


export default function SignUpModal(){
    const { modalState, toggleModals, signUp } = useContext(UserContext);
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
        e.preventDefault()

        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6){
            setValidation("Password must be at least 6 characters long")
            return;
        }
        else if(inputs.current[1].value !== inputs.current[2].value){
            setValidation("Passwords must match")
            return;
        }

        try{
            const cred = await signUp(inputs.current[0].value, inputs.current[1].value)
            formRef.current.reset();
            setValidation("");
            navigate("/")
        }catch (err){
            if(err.code === "auth/email-already-in-use"){
                setValidation("Email already in use")
            }else if(err.code === "auth/invalid-email"){
                setValidation("Invalid email")
            }

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
                <label htmlFor="signUpEmail">Email address</label>
                <input ref={addInputs} type="email" className="form-control" id="signUpEmail"  placeholder="Enter email" />
                </div>
                <div>
                <label  htmlFor="signUpPwd">Password</label>
                <input ref={addInputs} type="password" className="form-control" id="signUpPwd"  placeholder="Enter password" />
                </div>
                <div>
                <label htmlFor="signUpPwd">Repeat Password</label>
                <input ref={addInputs} type="password" className="form-control" id="repeatPwd"  placeholder="Repeat password" />
                <p color='red'>{validation}</p>
                </div>
                <button>Submit</button>
            </div>
        </form>

    </div>
    }