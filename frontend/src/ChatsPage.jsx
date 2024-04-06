import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('c67691e4-405a-4f4c-9e6d-4e19b552a4e7', props.user.username, props.user.secret);
    return <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
    </div>;
  };
  export default ChatsPage;