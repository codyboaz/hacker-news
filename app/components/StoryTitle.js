import React from 'react'

export default function StoryTitle({ title, url, theme }) {
  return (
    <a
      href={url}
      className={`story-link link-${theme}`}>
      {title}
    </a>
  )
}