import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{props.title}</span>
          {props.mode === 'light'
            ? 
            <button type="button" className={`btn btn-${props.mode} float-end border-0`} onClick={props.toggleMode}>
              <i class="bi bi-brightness-high-fill" style={{ "font-size": "18px" }}></i>
            </button>
            :
            <button type="button" className={`btn btn-${props.mode} float-end border-0`} onClick={props.toggleMode}>
              <i class="bi bi-moon-fill" style={{ "font-size": "18px" }}></i>
            </button>
          }
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = { title: PropTypes.string };
