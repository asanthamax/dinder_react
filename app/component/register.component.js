/**
 * Created by asantha on 6/10/2018.
 */
import React,{Component} from 'react';
import {

    Button,
    Item,
    Input,
    Icon,
    Text,
    Form
}from 'native-base';
import {observer} from 'mobx-react/native';
import {observable} from 'mobx';
import {StyleSheet} from 'react-native';

@observer
export default class Login extends Component{

    @observable email = '';
    @observable password = '';
    @observable invalidLogin = '';
    constructor(props){

        super(props)
        this.state = {

            errorTextValue: '',
            name: '',
            email: '',
            password: '',
            formValidation: true,
            formSubmit: false
        }

    }
    signUp(){

        const {auth} = this.props.stores
        const {navigate} = this.props.navigation
        auth.signUp({email: this.email,password: this.password,name: this.name})
            .then(() => {

                navigate('Login')
            })
            .catch(function (error) {

                alert('Invalid Data',error)
                //console.warn(error)
            })
    }
    validate(text,type){


        if (type == "name") {

            if (text != "") {

                this.setState({

                    formValidation: true,
                    validate_parser: this.state.validate_parser + 1
                })
                this.name = text
            } else {

                this.setState({

                    formValidation: false
                })
            }

        } else if (type == "email") {

            if (text == "") {

                this.setState({

                    formValidation: false
                })
            } else {

                emailRegx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (emailRegx.test(text)) {

                    this.setState({

                        formValidation: true,
                        validate_parser: this.state.validate_parser + 1
                    })
                    this.email = text
                } else {

                    this.setState({

                        formValidation: false
                    })
                }
            }

        } else if (type == "password") {

            if (text != "") {

                this.setState({

                    formValidation: true,
                    validate_parser: this.state.validate_parser + 1
                })
                this.password = text
            } else {

                this.setState({

                    formValidation: false
                })
            }

        } else {

            if (text == "") {

                this.setState({

                    formValidation: false
                })
            } else {

                if (text == this.password) {

                    this.setState({

                        formValidation: true,
                        validate_parser: this.state.validate_parser + 1
                    })
                    this.cpassword = text;
                } else {

                    this.setState({

                        formValidation: false
                    })
                }
            }

        }

        if(this.name!="" && this.email!="" && this.password!=""){

            if(this.password==this.cpassword){

                this.setState({

                    formSubmit: true,
                })
            }
        }
    }
    render(){

        const {auth} =this.props.stores
        return (
            <Form>
                <Item style={{marginBottom: 10}}>
                    <Icon style={{color: '#fff'}} name="person-outline"/>
                    <Input style={[{color: '#fff'}, !this.state.formValidation ? styles.error : null]} placeholder="Please Enter Name" placeholderTextColor="#fff"
                           onChangeText={(name) => this.validate(name, 'name')}/>
                </Item>
                <Item style={{marginBottom: 10}}>
                    <Icon style={{color: '#fff'}} name="person-outline"/>
                    <Input style={[{color: '#fff'}, !this.state.formValidation ? styles.error : null]} placeholder="Please Enter email" placeholderTextColor="#fff"
                           onChangeText={(email) => this.validate(email,'email')}/>
                </Item>
                <Item style={{marginBottom: 10}}>
                    <Icon style={{color: '#fff'}} name="lock-open"/>
                    <Input style={[{color: '#fff'}, !this.state.formValidation ? styles.error : null]} placeholder="Please Enter Password" placeholderTextColor="#fff"
                           onChangeText={(pass) => this.validate(pass,'password')} secureTextEntry={true}/>
                </Item>
                <Item style={{marginBottom: 10}}>
                    <Icon style={{color: '#fff'}} name="lock-open"/>
                    <Input style={[{color: '#fff'}, !this.state.formValidation ? styles.error : null]} placeholder="Please Confirm Password" placeholderTextColor="#fff"
                           onChangeText={(cpass) => this.validate(cpass,'cpassword')} secureTextEntry={true}/>
                </Item>
                <Button rounded block style={{marginBottom: 10}}
                        onPress={this.signUp.bind(this)}>
                    <Text>Register</Text>
                </Button>
            </Form>
        );
    }


}

const styles = StyleSheet.create({

    error:{

        borderWidth: 3,
        borderColor: 'red'
    }
})