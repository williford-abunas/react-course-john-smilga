import {useState, useEffect} from 'react'
import { shortList, list, longList } from './data'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Carousel = () => {
  const [people, setPeople] = useState(list)
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + people.length) % people.length)
  }

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % people.length)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide()
    }, 3000)
    
    return () => clearInterval(intervalId)
  }, [currentIndex, people.length])

  return (
    <section className='slider-container'>{
      people.map((person, i) => {
        const {id, image, name, title, quote } = person
        return <article className="slide" style={{transform: `translateX(${(i - currentIndex) * 100}%)`, opacity: i === currentIndex ? 1 : 0, visibility: i === currentIndex ? 'visible' : 'hidden'}} key={id}>
          <img src={image} alt={name} className="person-img"/>
          <h5 className="name">{name}</h5>
          <p className="title">{title}</p>
          <p className="text">{quote}</p>
          <FaQuoteRight className='icon'/>
        </article>
      })
    }
    <button type='button' className='prev' onClick={prevSlide}>
      <FiChevronLeft />
    </button>
    <button type='button' className='next' onClick={nextSlide}>
      <FiChevronRight />
    </button>
    </section>
  )
}

export default Carousel