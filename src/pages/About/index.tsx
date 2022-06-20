import React, { useEffect } from 'react'
import { Page } from 'layout/Page'

import styles from './styles.module.scss'

export const AboutPage = () => {
    useEffect(() => {
        document.title = 'About'
    }, [])

    return (
        <Page className={styles.page}>
            <h2>About page</h2>

            <h3>Про проект</h3>

            <div className={styles.block}>
                <p>
                    Автор: <a href="https://t.me/lehaisanya">@lehaisanya</a>
                </p>
                <p>
                    Github:{' '}
                    <a href="https://github.com/lehaisanya">@lehaisanya</a>
                </p>
                <p>
                    Репозиторій:{' '}
                    <a href="https://github.com/lehaisanya/test-phonebook">
                        test-phonebook
                    </a>
                </p>
            </div>

            <h3>Використані технології</h3>

            <div className={styles.block}>
                <ul className={styles.list}>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>MobX</li>
                    <li>SASS</li>
                    <li>React Router Dom</li>
                </ul>
            </div>

            <h3>Реалізовані фічі</h3>

            <div className={styles.block}>
                <ul className={styles.list}>
                    <li>Список усіх контактів</li>
                    <li>Пошук контакту по іменам</li>
                    <li>Сортування по алфавіту і навпаки</li>
                    <li>Додавання, редагування, видалення контакту</li>
                    <li>Меню з пунктами</li>
                    <li>Додавання фото контакту</li>
                    <li>Базовий дизайн</li>
                    <li>Базова адаптивність</li>
                    <li>Використання SASS модулів</li>
                    <li>Заповненні сторінки контентом</li>
                    <li>Одна анімація</li>
                    <li>Роутинг</li>
                    <li>Реалізація на Typescript</li>
                    <li>Зберігання данних в Local Storage</li>
                    <li>Валідація полей</li>
                </ul>
            </div>

            <h3>Не реалізовані фічі</h3>

            <div className={styles.block}>
                <ul className={styles.list}>
                    <li>Покриття тестами</li>
                    <li>ES Lint</li>
                    <li>Debounce на поле пошуку</li>
                    <li>Показування помилок при валідації</li>
                    <li>Декілька локальних аккаунтів</li>
                </ul>
            </div>
        </Page>
    )
}
