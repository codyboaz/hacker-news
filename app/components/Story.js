import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'
import { convertTime } from '../utils/helpers'

export default class Story extends React.Component {
  constructor(props) {
    super(props)
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
                <p className='story-info'>by <Link to={{ pathname: '/user', search: `?id=${story.by}` }} className={theme}>{story.by}</Link> on {convertTime(story.time)} with <Link to={`post?id=${story.id}`} className={theme}>{story.descendants}</Link> comments</p>
              </li>
            ))}
          </ul>
        )}

      </ThemeConsumer>
    )
  }
}