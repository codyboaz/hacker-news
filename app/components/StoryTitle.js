import React from 'react'

export default function StoryTitle({ title, url, theme }) {
  return (
    <a
      href={url}
      className={`story-link ${theme}`}>
      {title}
    </a>
  )
}