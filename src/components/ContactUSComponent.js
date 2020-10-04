import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col, Button, FormFeedback } from 'reactstrap'
import '../css/Contactus.css';
import { Control, LocalForm, Errors } from 'react-redux-form'



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class ContactUSComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: 'false',
            contactType: 'Tel',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,


            }
        }

        // this.handleInput = this.handleInput.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);

    }

    // handleInput(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     })

    // }

    // handleBlur = (field) => (event) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true }
    //     })
    // }

    // validate(firstname, lastname, telnum, email) {
    //     const error = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: '',
    //     };
    //     if (this.state.touched.firstname && firstname.length < 3)
    //         error.firstname = "First Name Should be >= 3 characters";
    //     else if (this.state.touched.firstname && firstname.length > 10)
    //         error.firstname = "First Name Should be <= 10 charecters";

    //     if (this.state.touched.lastname && lastname.length < 3)
    //         error.firstname = "Last Name Should be >= 3 charecters";
    //     else if (this.state.touched.lastname && lastname.length > 10)
    //         error.lastname = "Last Name Should be <= 10 charecters";

    //     const reg = /^\d+$/;
    //     if (this.state.touched.telnum && !reg.test(telnum))
    //         error.telnum = "Tel. number should contain only number";

    //     if (this.state.touched.email && email.split('').filter(x => x === "@").length !== 1)
    //         error.email = 'Email should contain a @';


    //         return error;
    // }


    // onFormSubmit(event) {
    //     event.preventDefault();

    //     alert(`
    //     firstname:${this.state.firstname},
    //     lastname:${this.state.lastname},
    //     telnum:${this.state.telnum},
    //     email:${this.state.email},
    //     agree:${this.state.agree},
    //     contactType:${this.state.contactType},
    //     message:${this.state.message},
    //     `)
    // }

    handelSubmit(values) {
        alert('CUrrent State is:' + JSON.stringify(values));
    }

    render() {
        // const error = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>

                </div>
                <div>
                    <h3>Contact Us</h3>
                    <hr />
                </div>
                <div className="row contactUs__row">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address >
                            Durbar Marg<br />
                    Opposite to XYZ complex<br />
                    Kathmandu, Nepal<br />
                            <i className="fa fa-phone fa-lg font-icon"></i>Tel.: +977 9860123156<br />
                            <i className="fa fa-fax fa-lg font-icon"></i>Fax: +977 9860123156<br />
                            <i className="fa fa-envelope fa-lg font-icon"></i>Email: <a href="mailto:fusion@food.net">fusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" > Call</a>
                            <a role="button" className="btn btn-info" > Skype</a>
                            <a role="button" className="btn btn-success" > mail</a>

                        </div>
                        <a></a>
                    </div>
                </div>
                <div className='row contactUs__row'>
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        {/* <Form onSubmit={this.onFormSubmit}>
                            <FormGroup row>
                                <Label htmlfor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input
                                        type='text'
                                        id="firstname"
                                        name='firstname'
                                        valid={error.firstname === ''}
                                        invalid={error.firstname !== ''}
                                        placeholder="Enter Your First Name"
                                        onBlur={this.handleBlur('firstname')}
                                        value={this.state.firstname}
                                        onChange={this.handleInput}
                                    />
                                    <FormFeedback>{error.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input
                                        type='text'
                                        id="lastname"
                                        name='lastname'
                                        valid={error.lastname === ''}
                                        invalid={error.lastname !== ''}
                                        placeholder="Enter Your Last Name"
                                        onBlur={this.handleBlur('lastname')}
                                        value={this.state.lastname}
                                        onChange={this.handleInput}

                                    />
                                    <FormFeedback>{error.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input
                                        type='tel'
                                        id="telnum"
                                        name='telnum'
                                        valid={error.telnum === ''}
                                        invalid={error.telnum !== ''}
                                        placeholder="Enter Your Contact Number"
                                        onBlur={this.handleBlur('telnum')}
                                        value={this.state.tel}
                                        onChange={this.handleInput}
                                    />
                                    <FormFeedback>{error.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input
                                        type='email'
                                        id="email"
                                        name='email'
                                        valid={error.email === ''}
                                        invalid={error.email !== ''}
                                        placeholder="Enter Your Email Address"
                                        onBlur={this.handleBlur('email')}
                                        value={this.state.email}
                                        onChange={this.handleInput}
                                    />
                                    <FormFeedback>{error.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 4, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type='checkbox'
                                                id="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInput}
                                            />
                                            <strong>May we contact you ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>

                                    <Input
                                        type='select'
                                        id="contactType">
                                        value={this.state.contactType}
                                            onchange={this.handleInput}
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlfor='message' md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Input
                                        type='textarea'
                                        id="message"
                                        name="message"
                                        rows="8"
                                        value={this.state.message}
                                        onChange={this.handleInput}
                                    />
                                </Col>
                            </FormGroup>


                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color='primary'>
                                        Send Feedback

                                    </Button>
                                </Col>

                            </FormGroup>

                        </Form> */}
                        <LocalForm onSubmit={(values) => this.handelSubmit(values)}>

                            <div className='form-group row'>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname'
                                        id="firstname"
                                        name="firstname"
                                        placeholder="Enter Your First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(10)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show='touched'
                                        messages={{
                                            required: "Required ",
                                            minLength: " Must be greater than 2 characters",
                                            maxLength: " Must be less than 10 characters"
                                        }}

                                    />


                                </Col>
                            </div>
                            <div className='form-group row'>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' id="lastname"
                                        name="lastname" placeholder="Enter Your Last Name" className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(10)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show='touched'
                                        messages={{
                                            required: "Required ",
                                            minLength: " Must be greater than 2 characters",
                                            maxLength: " Must be less than 10 characters"
                                        }}

                                    />
                                </Col>
                            </div>

                            <div className='form-group row'>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' id="telnum"
                                        name="telnum" placeholder="Enter Your Contact Number" className="form-control" validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(10), isNumber
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show='touched'
                                        messages={{
                                            required: "Required ",
                                            minLength: " Must be greater than 2 characters",
                                            maxLength: " Must be less than 10 characters",
                                            isNumber: " Must be a number"
                                        }}

                                    />
                                </Col>
                            </div>
                            <div className='form-group row'>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model='.email' id="email"
                                        name="email" placeholder="Enter Your Email" className="form-control"
                                        validators={{
                                            required, validEmail
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show='touched'
                                        messages={{
                                            required: "Required ",
                                            validEmail: "Invalid Email Address"
                                        }}

                                    />
                                     
                                </Col>
                            </div>
                            <div className='form-group row'>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input" />
                                            <strong>May we contact you ?</strong>
                                        </Label>

                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>

                                    <Control.select model=".contactType" name="contactTYpe"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>

                                </Col>
                            </div>
                            <div className="form-group row">
                                <Label htmlFor='message' md={2} >Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="8" className='form-control' />

                                </Col>
                            </div>
                            <div className="form-group row">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback

                                   </Button>
                                </Col>

                            </div>
                        </LocalForm>


                    </div>
                </div>
            </div>
        )
    }

}

export default ContactUSComponent

