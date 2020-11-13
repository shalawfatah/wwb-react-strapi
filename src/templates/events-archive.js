import React, {useState, useRef, useEffect} from 'react'
import Layout from '../components/layout'
import MainEvent from '../components/events/MainEvent'
import MarginalEvent from '../components/events/MarginalEvent'
import Pager from '../components/utilities/Pager'
import SEO from '../components/SEO'
import { graphql } from 'gatsby'
import {navigate} from 'gatsby-link'
import { format } from 'date-fns'

const Events = ({data, pageContext}) => {
    const {allStrapiEvents:{nodes:events}} = data

    const found = events.find((event)=> {
      const today = new Date()
      const myday = new Date(event.date)
      if(myday > today) {
        return event
      } else {
        return null
      }
    })

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    
    let interval = useRef();
    
    const startTimer = () => {
      const countdownDate = new Date(found.date).getTime();
      interval = setInterval(()=> {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if(distance < 0) {
          clearInterval(interval.current)
        } else {
          setTimerDays(days)
          setTimerHours(hours)
          setTimerMinutes(minutes)
          setTimerSeconds(seconds)
        }
        
      }, 1000)
    }
    useEffect(()=> {
      startTimer()
      let someref = interval.current
      return ()=> {
        clearInterval(someref)
      }
    })

    return (
        <Layout>
          <SEO title="Events" />
          <div className="py-5">
              <MainEvent title={found.title} 
                         image={found.photo.childImageSharp.fluid.src} 
                         slug={found.slug} 
                         setDays={timerDays} 
                         setHours={timerHours} 
                         setMinutes={timerMinutes} 
                         setSeconds={timerSeconds} 
                         />
              <div className="flex flex-wrap justify-center">
                  {events.map((event)=> {
                      return ( 
                      <div key={event.id}>
                      {new Date(event.date) > new Date() ?
                      <MarginalEvent title={event.title} summary={event.summary} date={format(new Date(event.date), 'dd MMMM, yyyy')} location={event.location} image={event.photo.childImageSharp.fluid} slug={event.slug} />
                      :
                      ''
                    }                      
                      </div> )
                  })}
              </div>
              <div className="py-16 flex justify-center items-end">
              <button className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-700 rounded-full outline-none transition-all duration-500 ease" onClick={()=> navigate(`/past-events`)}>
                        Past Events
                    </button>
                <Pager pageContext={pageContext} />
                </div>
              </div>
        </Layout>
    )
}

export default Events

export const query = graphql`
query($skip: Int!, $limit: Int!)
  {
    allStrapiEvents (
        sort: {order: ASC, fields: date}
        skip: $skip
        limit: $limit
        ) {
      nodes {
        summary
        title
        slug
        id
        date
        location
        photo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`


// var countDownDate = new Date(events[1].date).getTime();
    // var myfunc = setInterval(function() {

    //   var now = new Date().getTime();
    //   var timeleft = countDownDate - now;
          
    //   // Calculating the days, hours, minutes and seconds left
    //   var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    //   var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //   var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    //   var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
          
    //   // Result is output to the specific element
    //   document.getElementById("days").innerHTML = days
    //   document.getElementById("hours").innerHTML = hours
    //   document.getElementById("mins").innerHTML = minutes
    //   document.getElementById("secs").innerHTML = seconds 
          
    //   // Display the message when countdown is over
    //   }, 1000);
