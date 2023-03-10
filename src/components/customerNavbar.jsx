import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class CustomerNavbar extends Component{
    render(){
        return(<nav className="navbar navbar-expand-sm bg-body-tertiary navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Customers</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/customers'>Show Customer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/add customer'>Add Customer</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>)

    }
}
export  default CustomerNavbar