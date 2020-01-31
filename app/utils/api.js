export function getStories(type) {
  return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json`)
    .then((data) => data.json())
    .then((ids) => {
      if (!ids) {
        throw new Error('There was an error fetching the posts')
      }
      return ids.slice(0, 50)
    })
    .then((ids) => Promise.all(ids.map(getItem)))
    .then((posts) => removeDeleted(removeDead(posts)))
}

function getItem(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((data) => data.json())
}

export function getUserInfo(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
    .then((data) => data.json())
    .then((user) => {
      if (!user) {
        throw new Error('Error fetching user')
      }
      return user
    })
}

export function getUserStories(ids) {
  return Promise.all(ids.map(getItem))
    .then((posts) => storiesOnly(removeDead(removeDeleted(posts))))
}

function storiesOnly(posts) {
  return posts.filter(({ type }) => type === 'story')
}

function removeDead(posts) {
  return posts.filter(({ dead }) => dead !== true)
}

function removeDeleted(posts) {
  return posts.filter(({ deleted }) => deleted !== true)
}