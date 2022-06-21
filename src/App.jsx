import React, {useState, useEffect} from 'react'


//components import
import Header from './components/Header'
import Form from './components/Form'
import NewsList from './components/NewsList'

const App = () =>{

  const [category, setCategory] = useState('');
  const [result, setResult] = useState([]);
  const [actualpage, setActualPage] = useState(1);
  const [totalpages, setTotalPages] = useState(500);

  useEffect(() =>{
    const callAPI = async() =>{

      const pagesResult = 10;
      const url = `http://hn.algolia.com/api/v1/search?query=foo&tags=story&page=${actualpage}`;

      const result = await fetch(url);
      const data = await result.json();
      console.log(data)
      setResult(data.hits);


      //calculate total pages
      const calculateTotalPages = Math.ceil(data.nbHits / pagesResult); 
      setTotalPages(calculateTotalPages);

      //scroll page up
      const container = document.querySelector('.container');
      container.scrollIntoView({behavior: 'smooth'})
    }
    callAPI();
  }, [category, actualpage])


  //back page function
  const backPage = () =>{
    const newActualPage = actualpage - 1;

    if(newActualPage === 0) return;
    setActualPage(newActualPage);
  }

  //next page function
  const nextPage = () =>{
    const newActualPage = actualpage + 1;

    if(newActualPage > totalpages) return;
    setActualPage(newActualPage);
  }

  return(
    <div className="App">
      <Header
        title="Hacker news"
      />
      <hr/>

      <div className="container">
        <Form
          setCategory={setCategory}
        />

        <NewsList
          result={result}
        />
        <div className="buttons">
          {(actualpage === 1) 
            ? null 
            : <button
                id="back"
                type="button"
                className="btn btn-danger mt-2"
                onClick={backPage}
              >&laquo; Anterior
              </button>
          }

          {(actualpage === totalpages) 
            ? null 
            : <button
                id="next"
                type="button"
                className="btn btn-danger mt-2"
                onClick={nextPage}
              >Siguiente &raquo;
              </button>  
          }
        </div>
        
      </div>
    </div>
  );
}


export default App;
