import React from 'react'
import { convertTime } from '../utils/helpers'
import { Link } from 'react-router-dom'

export default function StoryMetaData({ by, time, id, theme, descendants = 0 }) {
  return (
    <div className={`story-info info-${theme}`}>
      <p>
        by <Link
          to={{
            pathname: '/user',
            search: `?id=${by}`
          }}>
          {by}
        </Link>
      </p>
      <p>
        {convertTime(time)}
      </p>
      {descendants > 0 &&
        <p>
          <Link
            to={{
              pathname: '/post',
              search: `?id=${id}`
            }}
            className={theme}>
            {descendants} comments
          </Link>
        </p>
      }
    </div>
  )
}