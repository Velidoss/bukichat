import './App.css';
import Header from './components/Header/Header';
import ChatList from './components/Chat/ChatList/ChatList';
import MessageInput from './components/Chat/MessageInput/MessageInput';
import Footer from './components/Footer/Footer';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container className="App">
      <Header />
      <ChatList />
      <MessageInput />
      <Footer />
    </Container>
  );
}

export default App;
