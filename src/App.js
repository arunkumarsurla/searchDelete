import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
  {
    uniqueNo: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'AK',
    role: 'Frontend Developer',
  },
]

class App extends Component {
  state = {
    input : "",
    details : initialUserDetailsList,
  }


  onSearch = (event) => {
    this.setState({
      input:event.target.value,

    })
  }

  deleteUser = (uniqueNo) => {
    const {details} = this.state
    const filteredUsersData = details.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({
      details: filteredUsersData
    })
  }

  render() {
    const {input,details} = this.state
    const searchResults = details.filter(eachUser =>
    eachUser.name.includes(input)
     )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" value={input} onChange={this.onSearch}/>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile deleteUser={this.deleteUser} details={eachUser} key={eachUser.uniqueNo} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
