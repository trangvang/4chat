import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        state = {
            messages: [],
            messagesId: 0
        }
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: new Date().getTime(),
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/150/150/nature',
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))

        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, {
                _id: new Date().getTime(),
                text: 'Hello developer ' + new Date().getTime(),
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/150/150/people',
                },
            }),
        }))
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}

export default Chat;