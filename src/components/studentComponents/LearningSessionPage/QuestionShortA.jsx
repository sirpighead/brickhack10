import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import Question from './Question';
import { getFirestore, collection, getDocs, query, doc, getDoc, where, setDoc } from "firebase/firestore";

class QuestionShortA extends Question {
    constructor(props) {
        super(props);
        this.state = {
            postAnswerUrl: "127.0.0.1:8000/check_cmd",
            postPayload: null,
            userInput: "",
            matchGeneralAnswer: false,  // Indicates if the option that is currently checked is the correct answer
            database: ""
        };

        console.log(this.props)
        // getDoc(doc(collection(this.props.firestoredb, "ReferenceTables"), this.props.question.tableRef))
        //     .then((tableSnapshot) => {
        //         console.log(tableSnapshot.data())
        //         this.setState({database: tableSnapshot.data().DBName})
        //     })
        //     .catch((e) => {
        //         console.log("Error: ", e)
        //     })
    }

    CheckAnswer = () => {
        console.log(this.state.userInput)
        if  (this.state.matchGeneralAnswer) {
            this.props.displaySuccess()
        } else {
            this.setState({
                postPayload: {
                    cmd: this.state.userInput,
                    correct_cmd: this.props.question.generalAnswer,
                    description: this.props.question.questionText,
                    db: ""
                }
            })
        }
    }

    sendQueryToBack = () => {

    }

    handleInput = (event) => {
        // console.log(event.target.value)
        this.setState(
            {
                userInput: event.target.value,
                matchGeneralAnswer: (this.props.question.generalAnswer === event.target.value)
            }
        )
    }

    postUserAnswer = async (userAnswer) => {
        this.setState({ loading: true });



        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const responseData = await response.json();
            this.setState({ loading: false });
            return responseData;

        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ loading: false, error: error.message });
            return null;
        }
    };

    render() {
        return (
            <>
                <Form>
                    <FormGroup>
                        <Form.Label>{this.props.question.questionText}</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Write SQL command here."
                            onChange={(e) => this.handleInput(e)}
                        />

                    </FormGroup>
                </Form>
                {/* {this.state.correct ? <p className="confirmation">Correct! "{this.state.optionSelectedString}"</p> : this.state.indexChecked != -1 ? <p className="confirmation">Incorrect</p> : <></>}  */}
                {super.render()}
            </>
        );
    }
}

export default QuestionShortA;