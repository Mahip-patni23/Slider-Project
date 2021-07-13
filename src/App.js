import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const people = data;
  const [index, setIndex] = useState(0);

  /* const { id, image, name, quote, title } = people[index]; */
  useEffect(() => {
    if(index<0){
      setIndex(people.length-1)
    }else if(index >= people.length)
    {
      setIndex(0);
    }
  }, [index, people])

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index+1);
    }, 3000)
    return () => clearInterval(interval);
  }, [index])

  return (<>
    <main>
      <header className="heading">
        <h2>reviews <span>.</span></h2>
      </header>
      <section className="section-center">
        {
          people.map((person, personIndex) => {
            const {id, name, image, title, quote } = person;
            let position = 'nextslide';
            if(personIndex===index)
            {
              position = 'activeslide';
            }
            if(personIndex === index-1 || (index===0 && personIndex===people.length-1))
            {
              position = 'lastslide';
            }
            return <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon"></FaQuoteRight>
            </article>
          })
        }

        {/* <article key="id" className="single-review">
          <img src={image} alt={name} className="person-img" />
          <h4>{name}</h4>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className="icon"></FaQuoteRight>
        </article> */}
        <button className="prev btn" onClick={() => setIndex(index-1)}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next btn" onClick={() => setIndex(index+1)}>
          <FiChevronRight></FiChevronRight>
        </button>
      </section>
    </main>
    <footer>
      <p>copyright @ <span>mahip-patni23...</span></p>
    </footer>
    </>
    
  );
}

export default App;
