import React, { Component } from 'react'

const quotes = [
  {
    "author": "Ellen Pao",
    "quote": "If we do not share our stories and shine a light on inequities, things will not change.",
    "position": "Former CEO of reddit"
  },
  {
    "author": "Sheryl Sandberg",
    "quote": "The word female , when inserted in front of something, is always with a note of surprise. Female COO, female pilot, female surgeon — as if the gender implies surprise … One day there won't be female leaders. There will just be leaders.",
    "position": "Facebook COO and Founder of Leanin.org"
  },
  {
    "author": "Caterina Fake",
    "quote": "I think one of the big challenges is actually cultivating beginners' minds and making sure you're still open to the world and continue to see new things. You can actually get jaded. You can stop seeing things that are new. You can start fearing failure. Those are the things an entrepreneur needs—an open mind and the ability to see the world with new eyes.",
    "position": "Co-Founder of Flickr and Hunch"
  },
  {
    "author": "Reshma Saujani",
    "quote": "I also say to my team: Do 10% of your job shittily. It’s okay to do something shittily. Perfectionism prevents us from taking double steps in our career. We think we have to be perfect, but we don't.",
    "position": " Founder of Girls Who Code"
  }
]


export default class Quotes extends Component {
  state = {
    quoteNum: 1
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.changeQuote(),
      1000
    );
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  changeQuote = () => {
    const { quoteNum } = this.state

    if (quoteNum < quotes.length) {
        this.setState(prevState => ({
          quoteNum: prevState.quoteNum + 1
        }))
      
    } else {
      this.setState({
        quoteNum: 1
      })
    }
  }


  render() {
    const { quoteNum } = this.state
    const index = quoteNum - 1
   
    return (
      <div style={{margin: "2rem"}}>
        {
          quotes[index] && (
              <>
                <p>Quote number {quoteNum}</p>
              <p style={{ fontSize: "1.2rem" }}>Quote: {quotes[index].quote}</p>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <p>Author: {quotes[index].author}</p>
                <p>Positon: {quotes[index].position}</p>
                </div>
              </>
            )
        }
      </div>
    )
  }
}
