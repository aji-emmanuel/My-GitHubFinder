import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
        <Fragment>
            <div className='footer text-center'>
                    <p>
                        <a href="https://www.linkedin.com/in/emmanuel-ajibode-8168a998" target='_blank'><i class="fab fa-linkedin"></i></a>
                        <a href="mailto:ajiemilo@gmail.com" target='_blank'><i class="far fa-envelope"></i></a>
                        <a href="https://www.instagram.com/ajiemilo" target='_blank'><i class="fab fa-instagram icon-3x"></i></a>
                        <a href="#"><i class="fas fa-phone-square"> +2348062316992</i> </a>
                    </p>
              <p>&#9400; 2021 Aji Creations. All Rights Reserved.</p>
            </div>
        </Fragment>
    )
}

export default Footer
