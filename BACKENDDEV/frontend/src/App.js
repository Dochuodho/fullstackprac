import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import ReactDom from 'react-dom'


function App() {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method': 'GET',
      headers: {
        'Content-Type': 'applications/json'
      }

    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))

  }, [])


  return (
    <div className="App">
      <h1>Flask and ReactJS course</h1>

      {articles.map(article => {
        return (
          <div key = {article.id}>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>{article.date}</p>

            <div className = "row">
              <div className = "col-md-1">
                <button className = "btn btn-primary" 
                onClick = {() => editArticle(article)}>Update</button>
              </div>

              <div className = "col">
                <button className = "btn btn-danger">Delete</button>
              </div>
              </div>


       </div>
        )
      })}

    </div>
  );
}

export default App;
