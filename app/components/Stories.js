import React from 'react'
import Story from './Story'
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
    console.log(prevProps.type !== this.props.type)
    prevProps.type !== this.props.type ? this.getData() : null
  }
  getData() {
    this.setState({
      loading: true,
      stories: null
    })
    getStories(this.props.type)
      .then((stories) => {
        console.log(stories)
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
      return <p>Loading</p>
    }
    return (
      <Story stories={this.state.stories} />
    )
  }
}