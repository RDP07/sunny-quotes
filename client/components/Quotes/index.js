import React, { Component } from 'react';
import styles from './Quotes.less'

export default class Quotes extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.fetchRequest = this.fetchRequest.bind(this)
    this.state = {
      quote: {},
      isLoading: false,
    }
  }

  componentWillMount () {
    this.fetchRequest()
  }

  fetchRequest () {
    const path = 'http://sunnyquotes.net/q.php?random';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    this.setState({ isLoading: true })

    fetch(proxyUrl + path)
      .then(response => response.json())
      .then(data => {
        this.setState({ quote: data, isLoading: false })
      })
  }

  handleClick (evt) {
    this.fetchRequest()
  }

  render () {
    return (
      <div className={ styles.content }>
        { !this.state.isLoading
          ? <div className={ styles.response }>
              <p className={ styles.text }> { this.state.quote.sqQuote } </p>
              <p className={ styles.author }> { this.state.quote.sqWho } </p>
            </div>
          : <h1 className={ styles.loading }>Loading...</h1>
        }
        <div className={ styles.options }>
          <button 
            className={ styles.getQuote }
            onClick={ this.handleClick }
            >
              Next
          </button>
          <button
            className={ styles.social }
            id='tweet'>
            <img
              className={ styles.social }
              src='images/icon-twitter@2x.png'
              />
          </button>
        </div>
      </div>
    )
  }
}
