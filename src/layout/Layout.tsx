import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

import styles from './styles.module.scss'

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <Header />
            </header>
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    )
}
