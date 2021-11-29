import React, {Fragment} from 'react'

export const Footer = () => {
    return (
        <Fragment>
            <div className='footer text-center'>
                    <p>
                        <a href="https://www.linkedin.com/in/emmanuel-ajibode-8168a998" target='_blank' rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:ajiemilo@gmail.com" target='_blank' rel="noreferrer"><i className="far fa-envelope"></i></a>
                        <a href="https://www.instagram.com/ajiemilo" target='_blank' rel="noreferrer"><i className="fab fa-instagram icon-3x"></i></a>
                        <i className="fas fa-phone-square"> +2348062316992</i>
                    </p>
              <p>&#9400; 2021 Aji Creations. All Rights Reserved.</p>
            </div>
        </Fragment>
    )
}

export default Footer
