import React from 'react'

export default function StoryTitle({ title, url, theme }) {
  console.log(theme)
  return (
    <a
      href={url}
      className={`story-link ${theme}`}>
      {title}
    </a>
  )
}