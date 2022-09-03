
import React from 'react'
import {BrowserRouter, Routes, Route , Link, Navigate} from 'react-router-dom'
function About() {
  return (
    <div>
        <h1>About route</h1>
        <Link to="/learn/course">Courses</Link> |
        <Link to="/learn/bundle" >Bundle</Link>
    </div>
  )
}

export default About

// Add | after first link so that both links are treated
// differently by react

