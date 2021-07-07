import './App.css';
import { Container } from '@material-ui/core';
import { useRef } from 'react';
import Header from './components/Header/Header';
import ChatList from './components/Chat/ChatList/ChatList';
import MessageInput from './components/Chat/MessageInput/MessageInput';
import Footer from './components/Footer/Footer';

function App() {
  const chatWindowRef = useRef(null);

  return (
    <Container>
      <Header />
      <ChatList chatWindowRef={chatWindowRef} />
      <MessageInput />
      <Footer />
    </Container>
  );
}

export default App;
