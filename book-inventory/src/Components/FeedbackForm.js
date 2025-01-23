import { FieldHolder, FormContainer, InputField, Label, LabelHolder, RowHolder, SubmitButton } from "../Components-styles/feedbackForm";
import React, {useState} from "react";

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

    const firstNameChangeHandler = (e)=>{
        setFieldValues({...fieldValues, firstName: e?.target?.value})
    }

    const lastNameChangeHandler = (e)=>{
        setFieldValues({...fieldValues, lastName: e?.target?.value})
    }

    const emailChangeHandler = (e) =>{
        setFieldValues({...fieldValues, email: e?.target?.value});
    }

    const ageChangeHandler = (e) => {
        setFieldValues({...fieldValues, age: e?.target?.value});
    }
    
    return(
    <>
        <FormContainer>
            <RowHolder>
                <LabelHolder>
                    <Label for="fname">First Name</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="fname" name="firstname" placeholder="Your name.." value={fieldValues?.firstName} onChange={firstNameChangeHandler}/>
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="lname">Last Name</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="lname" name="lastname" placeholder="Your last name.." value={fieldValues?.lastName} onChange={lastNameChangeHandler}/>
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="email">Email</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="email" name="email-address" placeholder="Enter you email address.." value={fieldValues?.email} onChange={emailChangeHandler}/>
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="age">Age</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="number" id="age" name="Age" placeholder="Enter you age.." value={fieldValues?.age} onChange={ageChangeHandler }/>
                </FieldHolder>
            </RowHolder>
        </FormContainer><SubmitButton value="SUBMIT" />
    </>

    )
}

export default FeedbackForm;