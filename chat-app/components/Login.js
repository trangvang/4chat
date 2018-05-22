import React from 'react';
import { Text, View, Button, TextInput, StyleSheet, TouchableHighlight } from 'react-native';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.signUp = this.signUp.bind(this);
        this.state = {
            userName: ""
        }
        this.changeUserName = this.changeUserName.bind(this);
    }

    changeUserName(event){
        this.setState({
            userName: event.nativeEvent.text
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.screenProps.connection.isLogin){
            this.props.navigation.navigate("chatFlow");
        }
    }

    signIn() {
        this.props.screenProps.login(this.state.userName);        
    }

    signUp() {
        this.props.navigation.navigate("chatFlow")
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={{height: 40, width:250, padding:10, borderColor: 'gray', borderWidth: 1}} 
                    placeholder='Username' 
                    onChange = {this.changeUserName} />
                <TouchableHighlight 
                    style ={{
                        height: 40,
                        width:160,
                        marginTop :20}}>
                    <Button title='LogIn' 
                        style={styles.Button}
                        onPress={this.signIn} />
                </TouchableHighlight> 
                <Text>OR</Text>
                <TouchableHighlight 
                    style ={{
                        height: 40,
                        width:160,
                        marginTop:5
                    }}>
                    <Button title='Sign Up' 
                        onPress={this.signUp} />
                </TouchableHighlight> 
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
});