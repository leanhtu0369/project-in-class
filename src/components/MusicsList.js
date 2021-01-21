import React, { Component } from 'react'
import { musicList  } from "./../mockData/music"

class MusicsList extends Component {
  state = {
    musicList
  }

  get musics() {
    return this.state.musicList.map((item, index) => {
      return (
        <li key= { index }>
          <p>title: { item.title }</p>
          <p>name:{ item.name }</p>
          <p>time:{ item.time }</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>{ this.musics }</ul>
      </div>
    )
  }
}

export default MusicsList
