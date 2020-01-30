export function getStories(type) {
  return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json`)
    .then((data) => data.json())
    .then((ids) => {
      if (!ids) {
        throw new Error('There was an error fetching the posts')
      }
      return ids.slice(0, 50)
    })
    .then((ids) => Promise.all(ids.map(getStoryFromId)))
    .then((posts) => removeDeleted(removeDead(posts)))
}

function getStoryFromId(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((data) => data.json())
}

function removeDead(posts) {
  return posts.filter(({ dead }) => dead !== true)
}

function removeDeleted(posts) {
  return posts.filter(({ deleted }) => deleted !== true)
}