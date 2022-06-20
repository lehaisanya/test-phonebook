import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from 'routing/routes'

import styles from './styles.module.scss'

export const Header = () => {
    return (
        <div className={styles.container}>
            <Link to={routes.home}>Home</Link>
            <Link to={routes.contacts}>Contacts</Link>
            <Link to={routes.about}>About</Link>
        </div>
    )
}
