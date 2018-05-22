window.navigator.userAgent = "react-native";
let io = require('react-native-socket.io-client/socket.io');
var socket = io.connect('http://192.168.1.33:3000/');

export default function mapDispatchToProps(dispatch) {
    socket.on('logged', function (data) {
        dispatch({
            type: 'LOGGED',
            data
        })
    });

    socket.on('user added', function (data) {
        dispatch({
            type: 'CREATE_USER',
            data
        })

    });

    socket.on('users fetched', function (data) {
        dispatch({
            type: 'FETCH_USERS',
            data
        })
    });

    return {
        connect: () => {
            socket.emit('connection');
            socket.on('connected', function (data) {
                dispatch({
                    type: 'CONNECTION',
                    data
                })
            });
        },
        login: (userName) => {
            socket.emit('login', { userName: userName });
        },
        createUser: (userName) => {
            socket.emit('add user', { userName: userName });
        },
        fetchUsers: () => {
            socket.emit('fetch users', {});
        }
    }
}
