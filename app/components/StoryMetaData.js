import React from 'react'
import { convertTime } from '../utils/helpers'
import { Link } from 'react-router-dom'

export default function StoryMetaData({ by, time, id, theme, descendants = 0 }) {
  return (
    <p className='story-info'>
      by&nbsp;
    <Link
        to={{
          pathname: '/user',
          search: `?id=${by}`
        }}
        className={theme}>
        {by}
      </Link>
      &nbsp;on {convertTime(time)}
      {descendants > 0 &&
        <React.Fragment>
          &nbsp;with&nbsp;
        <Link
            to={{
              pathname: '/post',
              search: `?id=${id}`
            }}
            className={theme}>
            {descendants}
          </Link>
          &nbsp;comments
        </React.Fragment>
      }

    </p>
  )
}