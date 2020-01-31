import React from 'react'
import queryString from 'query-string'
import Loading from './Loading'
import Story from './Story'
import { getUserInfo, getUserStories } from '../utils/api'
import { convertTime } from '../utils/helpers'

export default class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      loading: true,
      stories: null,
      loadingStories: true
    }
  }
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)
    getUserInfo(id)
      .then((user) => {
        this.setState({
          user,
          loading: false
        })
        return getUserStories(user.submitted)
      })
      .then((stories) => {
        this.setState({
          stories,
          loadingStories: false
        })
      })
  }
  render() {
    if (this.state.loading) {
      return <Loading />
    }
    const { user } = this.state
    return (
      <React.Fragment>
        <h2>{user.id}</h2>
        <div>
          joined <span>{convertTime(user.created)}</span> has <span>{user.karma}</span> karma
        </div>
        <h4>Posts</h4>
        {this.state.loadingStories
          ?
          <Loading />
          :
          <Story stories={this.state.stories} />
        }
      </React.Fragment>
    )
  }
}