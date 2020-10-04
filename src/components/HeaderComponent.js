import React, { Component } from 'react'
import { Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../css/Header.css'

class HeaderComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isNaveOpen: false,
            isModalOpen: false
        }
    }

    toggleNav = () => {
        this.setState({ isNaveOpen: !this.state.isNaveOpen })

    }
    toggleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen })
    }
    handelLogin = (e) =>{
        e.preventDefault();
        this.toggleModal();
        console.log(`Username: ${this.username.value} , Password: ${this.password.value}, Remmber Me: ${this.remember.checked}`)


    }

    render() {

        return (
            <div>
                {/*Login Model */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        {/* */}
                        <Form onSubmit={this.handelLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type="text" id="username" user="username"
                                innerRef={(input) => this.username = input}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type="password" id="password" user="password"
                                       innerRef={(input) => this.password = input}
                                />
                               
                   </FormGroup>
                            <FormGroup>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                           innerRef={(input) => this.remember = input}
                                    />
                                         Remember Me
                              </Label>
                            </FormGroup>
                            <Button type='submit' color='primary'>Login</Button>
                        </Form>

                    </ModalBody>

                </Modal>
                <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand herf='/home'>
                            Food Fusion
                          </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className="fa fa-home fa-lg"></span>Home
                                      </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        <span className="fa fa-info fa-lg"></span>About US
                                      </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/menu'>
                                        <span className="fa fa-list fa-lg"></span>Menu
                                      </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'>
                                        <span className="fa fa-phone fa-lg"></span>Contact Us
                                      </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-auto' navbar>

                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in fa-lg' ></span>  Login
                                    </Button>
                                </NavItem>
                            </Nav>

                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div classNamerow=' row header__row' >
                            <div className='col-12 col-sm-6'>
                                <h1>Food Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>

                            </div>
                        </div>

                    </div>
                </Jumbotron>
            </div>
        )
    }


}


export default HeaderComponent
