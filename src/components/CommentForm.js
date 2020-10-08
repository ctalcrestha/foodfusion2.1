import React from 'react'
import { useState } from 'react';
import { Button, Col, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form'
import { render } from '@testing-library/react';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function CommentForm(props){

const[isModalOpen, setIsModalOpen] = useState(false);
   
   const toggleModal = () => {
       
           setIsModalOpen(!isModalOpen);
        
    }
  const handelSubmit = (values) =>  {
    props.addComment(props.dishId, values.rating, values.author, values.comment)
    toggleModal();
         }

        

 

    return (
        <>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) =>  handelSubmit(values)}>
                    <Row className='form-group pl-3 pr-3'>
                            
                          
                            <Label  htmlFor='rating'>Racting</Label>
                                <Control.select model=".rating" name="rating"
                                           className="form-control">
                                           <option>1</option>
                                           <option>2</option>
                                           <option>3</option>
                                           <option>4</option>
                                           <option>5</option>
                                         
                                       
                                       </Control.select>
   
                                   
                               </Row>

                        <Row className='form-group pl-3 pr-3' >
                            <Label htmlFor='author' >Name</Label>
                           
                                <Control.text model='.author'
                                    id="author"
                                    name="author"
                                    placeholder="Enter Your Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                     />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show='touched'
                                    messages={{
                                        required: "Required ",
                                        minLength: " Must be greater than 2 characters",
                                        maxLength: " Must be less than 15 characters"
                                    }}

                                />


                            
                        </Row>
                        <Row className="form-group row pl-3 pr-3">
                            <Label htmlFor='message'  >Comment</Label>
                           
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6" className='form-control' />

                           
                        </Row>
                        <Button color="primary">
                            Submit
                        </Button>
                       
                       </LocalForm>

                </ModalBody>

            </Modal>

                <Button color="secondary" outline onClick={toggleModal}>

                    <span className="fa fa-pencil fa-lg"></span>
            Submit Button
        </Button>

        </>
    )
}


export default CommentForm