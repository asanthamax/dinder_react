/**
 * Created by asantha on 6/9/2018.
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

@observer
export default class Login extends Component{

    @observable email = '';
    @observable password = '';
    @observable invalidLogin = '';
    constructor(props){

        super(props)
        this.state = {

            errorTextValue: ''
        }

    }
    signIn(){

        const {auth} = this.props.stores
        const {navigate} = this.props.navigation
        auth.signIn({email: this.email,password: this.password})
            .then(() => {

                navigate('Match')
            })
            .catch(function (error) {

               alert('Invalid Credentials','Please enter valid username and password')

            })
    }
    render(){

        const {auth} =this.props.stores
        const {navigate} = this.props.navigation;
        return (
            <Form>
                <Item style={{marginBottom: 10}}>
                    <Icon style={{color: '#fff'}} name="person-outline"/>
                    <Input style={{color: '#fff'}} placeholder="Please Enter email" placeholderTextColor="#fff"
                     onChangeText={(email) => this.email = email}/>
                </Item>
                <Item style={{marginBottom: 10}}>
                    <Icon style={{color: '#fff'}} name="lock-open"/>
                    <Input style={{color: '#fff'}} placeholder="Please Enter Password" placeholderTextColor="#fff"
                           onChangeText={(pass) => this.password = pass} secureTextEntry={true}/>
                </Item>
                <Button rounded block style={{marginBottom: 10}}
                        onPress={this.signIn.bind(this)}>
                    <Text>Login</Text>
                </Button>
                <Button rounded block style={{marginBottom: 10}}
                        onPress={() => {

                            navigate('Register')
                        }}>
                    <Text>Register</Text>
                </Button>
            </Form>
        );
    }


}