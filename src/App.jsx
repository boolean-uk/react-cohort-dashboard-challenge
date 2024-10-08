import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/header/Header';
import { SideBar } from './components/sidebar/SideBar';
import { createContext, useEffect, useState } from 'react';
import { Dashboard } from './components/dashboard/Dashboard';
import { ProfileView } from './components/profile-page/ProfileView';
import { PostView } from './components/post/PostView';

const ContactContext = createContext();

function App() {

  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);
  
  const [signedInUser, setSignedInUser] = useState(contacts[0]);

  const fetchPosts = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/tuvaea/post`
    );
    const data = await response.json();
    setPosts(data.reverse());
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch(
      `https://boolean-uk-api-server.fly.dev/tuvaea/contact`
    );
    const data = await response.json();
    setContacts(data);
  }

  useEffect(() => {
    fetchContacts();
  }, []);


  useEffect(() => {
    if (contacts.length > 0) {
      setSignedInUser(contacts[0]);
    }
  }, [contacts]); 
 

  return (
    <>
      <ContactContext.Provider 
        value={{ 
          contacts, 
          setContacts, 
          posts, 
          setPosts, 
          signedInUser, 
          setSignedInUser,
          fetchPosts,
          fetchContacts}}>
        <Container fluid className="d-flex flex-column vh-100 p-0">
          <Header/>
          <Row className="flex-grow-1 m-0">
            <SideBar/>
            <Col xs={11} className="bg-homepage overflow-auto content-column">
              
                <Routes>
                  <Route path='/' element={<Dashboard />}/>
                  <Route path='/account/:id' element={<ProfileView />}/>
                  <Route path='/post/:id' element={<PostView />}/>

                </Routes>
            
            </Col>
          </Row>
        </Container>
      </ContactContext.Provider>
    </>
  )
}

export {App, ContactContext}
