import './App.css';
import Header from './components/Header/Header';
import ChatList from './components/Chat/ChatList/ChatList';
import MessageInput from './components/Chat/MessageInput/MessageInput';

function App() {
  return (
    <div className="App">
      <Header />
      <ChatList />
      <MessageInput />
    </div>
  );
}

export default App;
