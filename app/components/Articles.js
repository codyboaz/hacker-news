import React from 'react'
import { getTopPosts } from '../utils/api'

export default class Articles extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      stories: null
    }
  }
  componentDidMount() {
    getTopPosts()
      .then((stories) => {
        console.log(stories)
        this.setState({
          loading: false,
          stories
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }
  render() {
    if (this.state.loading) {
      return <p>Loading</p>
    }
    return (
      <ul>
        {this.state.stories.map((story) => (
          <li key={story.id}>
            {story.title}
          </li>
        ))}
      </ul>
    )
  }
}