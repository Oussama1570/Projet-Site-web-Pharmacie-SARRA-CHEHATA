import React from 'react'
import Contactform from "./Contactform.js"
import { Helmet } from 'react-helmet'

const Contactpage = () => {
  return (
    <div>
      <Helmet>
        <title>Contactez-Nous - Pharmacy Sarra Chehata</title>
      </Helmet>
      <Contactform/>
    </div>
  )
}

export default Contactpage


