import React from 'react'
import StoryTitle from './StoryTitle'
import { ThemeConsumer } from '../contexts/theme'
import StoryMetaData from './StoryMetaData'

export default function Story({ stories }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <ul className='story-list'>
          {stories.map((story) => (
            <li
              key={story.id}
              className={story.id}>
              <StoryTitle
                url={story.url}
                title={story.title}
                theme={theme} />
              <StoryMetaData
                by={story.by}
                time={story.time}
                id={story.id}
                theme={theme}
                descendants={story.descendants} />
            </li>
          ))}
        </ul>
      )}
    </ThemeConsumer>
  )
}