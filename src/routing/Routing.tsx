import React from 'react'
import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import { Layout } from 'layout/Layout'
import { HomePage } from 'pages/Home'
import { ContactsPage } from 'pages/Contacts'
import { AboutPage } from 'pages/About'
import { routes } from './routes'

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path={routes.contacts} element={<ContactsPage />} />
                    <Route path={routes.about} element={<AboutPage />} />
                </Route>
            </Routes>
        </Router>
    )
}
