import { FieldHolder, FormContainer, InputField, Label, LabelHolder, RowHolder, SubmitButton } from "../Components-styles/feedbackForm";

function FeedbackForm(){
    return(
        <><FormContainer>
            <RowHolder>
                <LabelHolder>
                    <Label for="fname">First Name</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="fname" name="firstname" placeholder="Your name.." />
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="lname">Last Name</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="email">Email</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="text" id="email" name="email-address" placeholder="Enter you email address.." />
                </FieldHolder>
            </RowHolder>
            <RowHolder>
                <LabelHolder>
                    <Label for="age">Age</Label>
                </LabelHolder>
                <FieldHolder>
                    <InputField type="number" id="age" name="Age" placeholder="Enter you age.." />
                </FieldHolder>
            </RowHolder>
        </FormContainer><SubmitButton value="SUBMIT" /></>

    )
}

export default FeedbackForm;