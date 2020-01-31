import React from 'react'
import Loading from './Loading'
import StoryTitle from './StoryTitle'
import { getItem, getComments } from '../utils/api'
import queryString from 'query-string'
import StoryMetaData from './StoryMetaData'
import { ThemeConsumer } from '../contexts/theme'

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      story: null,
      loading: true,
      comments: null,
      loadingComments: true
    }
  }
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)
    getItem(id)
      .then((story) => {
        this.setState({
          story,
          loading: false
        })
        return getComments(story.kids)
      })
      .then((comments) => {
        this.setState({
          comments,
          loadingComments: false
        })
      })
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    }
    const { story } = this.state
    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div className='post-data'>
            <h1 className='post-header'>
              <StoryTitle
                url={story.url}
                title={story.title}
                theme={theme} />
            </h1 >
            <StoryMetaData
              by={story.by}
              time={story.time}
              id={story.id}
              theme={theme}
              descendants={story.descendants} />
            {this.state.loadingComments
              ?
              <Loading />
              :
              this.state.comments.map((comment) => (
                <div
                  key={comment.id}
                  className='post-comments'>
                  <StoryMetaData
                    by={comment.by}
                    time={comment.time}
                    id={comment.id}
                    theme={theme} />
                  <p dangerouslySetInnerHTML={{ __html: `${comment.text}` }} />
                </div>
              ))}
          </div>
        )}
      </ThemeConsumer>

    )
  }
}