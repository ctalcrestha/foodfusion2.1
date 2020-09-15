import React, { Component } from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import {DISHES} from './shared/dishes'


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes:DISHES
        }
    }
//es7 snippets
    render(){
        return (
            <div className="App">
                <Navbar color="primary" dark expand='md'>
                    <div className='container'>
                        <NavbarBrand herf='/'>
                            Food Fusion
                        </NavbarBrand>
                    </div>

                </Navbar>
                <Menu dishes={this.state.dishes}/>
                {/*    name            value */}
            </div>
        );
    }

}

export default App;


