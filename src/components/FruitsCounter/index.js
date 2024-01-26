// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCount extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoIncrement = () => {
    this.setState(prevState => {
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  bananaIncrement = () => {
    this.setState(prevState => {
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruits-container">
        <div className="fruits-card">
          <h1 className="heading">
            {' '}
            Bob ate <span className="count"> {mangoCount} </span> mangoes{' '}
            <span className="count"> {bananaCount} </span> bananas{' '}
          </h1>
          <div className="item-container">
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="mango-button" onClick={this.mangoIncrement}> Eat Mango </button>
            </div>

            <div className="banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="banana-button" onClick={this.bananaIncrement}> Eat Banana </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCount
