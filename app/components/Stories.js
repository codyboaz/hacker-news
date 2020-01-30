import React from 'react'
import Story from './Story'
import Loading from './Loading'
import { getStories } from '../utils/api'

export default class Stories extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      stories: null
    }
    this.getData = this.getData.bind(this)
  }
  componentDidMount() {
    this.getData()
  }
  componentDidUpdate(prevProps) {
    prevProps.type !== this.props.type ? this.getData() : null
  }
  getData() {
    this.setState({
      loading: true,
      stories: null
    })
    getStories(this.props.type)
      .then((stories) => {
        this.setState({
          loading: false,
          stories
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    return (
      <Story stories={this.state.stories} />
    )
  }
}