import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
      <>
        <div class="main_container">
            <h1>Page Not Found</h1>
            <Link to="/">go back...</Link>
        </div>
      </>
  )
}

export default PageNotFound
