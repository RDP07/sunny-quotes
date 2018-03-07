import React, { Component } from 'react';
import styles from './Headshots.less'
import { string, func } from 'prop-types'

export default class Headshots extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const author = this.props.author
    const firstName = author.split(' ')[0]

    return (
      <div className={ styles.image }>
        { firstName === 'Charlie' || firstName === 'Dee' || firstName === 'Dennis' || firstName === 'Frank' || firstName === 'Mac'
          ? <img 
              src={ `/images/sunny${ firstName }.jpg` } 
              alt={ `${ author } from the TV Show, It's Always Sunny in Philadelphia `} />
          : <img src='/images/sunny.jpg' alt='sunny'/> 
        }
      </div>
    )
  }
}
