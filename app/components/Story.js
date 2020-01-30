import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

export default class Story extends React.Component {
  constructor(props) {
    super(props)
  }
  convertTime(unixT) {
    const date = new Date(unixT * 1000)
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours() % 12 === 0 ? 12 : date.getHours() % 12}:${date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`
  }
  render() {
    const { stories } = this.props
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <ul className='story-list'>
            {stories.map((story) => (
              <li key={story.id} className={story.id}>
                <a href={story.url} className={`story-link ${theme}`}>{story.title}</a>
                <p className='story-info'>by <Link to={`/user?id=${story.by}`} className={theme}>{story.by}</Link> on {this.convertTime(story.time)} with <Link to={`post?id=${story.id}`} className={theme}>{story.descendants}</Link> comments</p>
              </li>
            ))}
          </ul>
        )}

      </ThemeConsumer>
    )
  }
}