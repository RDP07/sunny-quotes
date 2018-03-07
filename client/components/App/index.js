import React, { Component } from 'react';
import styles from './App.less'
import Quotes from 'components/Quotes'

export default class App extends Component {
  render () {
    return (
      <div>
        <Quotes />
      </div>
    )
  }
}
