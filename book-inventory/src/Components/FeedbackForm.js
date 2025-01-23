import { FieldHolder, FormContainer, InputField, Label, LabelHolder, RowHolder, SubmitButton } from "../Components-styles/feedbackForm";
import React, {useState} from "react";
import { onlyAlphabets, validateEmail } from "../utils/FormHandling";

function FeedbackForm(){
    const [fieldValues, setFieldValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age:""
    });

    const [fieldErrors, setFieldErrors] = useState({
        firstNameError:"",
        lastNameError:"",
        emailError:"",
        ageError:"",
    });

    console.log(fieldErrors , fieldValues);

    const firstNameChangeHandler = (e)=>{
        setFieldValues({...fieldValues, firstName: e?.target?.value});
    }

    const lastNameChangeHandler = (e)=>{
        setFieldValues({...fieldValues, lastName: e?.target?.value});
    }

    const emailChangeHandler = (e) =>{
        setFieldValues({...fieldValues, email: e?.target?.value});  
    }

    const ageChangeHandler = (e) => {
        setFieldValues({...fieldValues, age: e?.target?.value});
    }

    const firstNameBlurHandler = ()=>{
        if(fieldValues.firstName.length === 0){
            setFieldErrors({...fieldErrors,firstNameError: "first name must not be empty."});
        }else if(!onlyAlphabets(fieldValues.firstName)){
            setFieldErrors({...fieldErrors,firstNameError: "first name must contain only alphabets"});
        }
    }

    const lastNameBlurHandler = ()=>{
        if(fieldValues.firstName.length === 0){
            setFieldErrors({...fieldErrors,lastNameError: "last name must not be empty."});
        }else if(!onlyAlphabets(fieldValues.lastName)){
            setFieldErrors({...fieldErrors,lastNameError: "last name must contain only alphabets"});
        }
    }

    const emailBlurHandler = ()=>{
        if(fieldValues.email.length === 0){
            setFieldErrors({...fieldErrors,emailError: "email must not be empty."});
        }else if(!validateEmail(fieldValues.email)){
            setFieldErrors({...fieldErrors,emailError: "email is not in proper format."});
        }
    }

    const ageBlurHandler = ()=>{
        if(fieldValues.age.length === 0){
            setFieldErrors({...fieldErrors,ageError: "age must not be empty."});
        }
    }

    const errorAlert = ()=>{
        if(fieldErrors.firstNameError){
            alert(fieldErrors.firstNameError);
        }else if(fieldErrors.lastNameError){
            alert(fieldErrors.lastNameError);
        }else if(fieldErrors.ageError){
            alert(fieldErrors.ageError);
        }else if(fieldErrors.emailError){
            alert(fieldErrors.emailError);
        }
    }
    
    return(
    <>
        <FormContainer>
            <RowHolder>
                <LabelHolder>
                    <Label for="fname">First Name</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="fname" name="firstname" placeholder="Your first name.." value={fieldValues?.firstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}/>
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="lname">Last Name</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="lname" name="lastname" placeholder="Your last name.." value={fieldValues?.lastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="email">Email</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="email" name="email-address" placeholder="Enter you email address.." value={fieldValues?.email} onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="age">Age</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="number" id="age" name="Age" placeholder="Enter you age.." value={fieldValues?.age} onChange={ageChangeHandler} onBlur={ageBlurHandler}/>
                </FieldHolder>
            </RowHolder>
        </FormContainer><SubmitButton value="SUBMIT" onClick={errorAlert}/>
    </> 
    )
}

export default FeedbackForm;