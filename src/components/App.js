import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Posts from "./posts";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [newContent, setNewContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(true)


  function handlePageChanege(){
    if(page === false){
      setPage(true)
    }else {
      setPage(false)
    };
  }


  function handleChange (event){
    const newValue = event.target.value;
    return(
      setNewContent(newValue)
    )
  };


  function handleNewPost(event){
      const newPostContent = newContent;
      return(
        setPosts(prevPosts => [...prevPosts, newPostContent])

      )
  }

  return (
    <Router>
    <div >
    <Header/>
    <Switch>
    <Route path = "/posts" exact component = {Posts}/>
    <Route path = "/" exact component = {HomePage}/>
    </Switch>
    <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
