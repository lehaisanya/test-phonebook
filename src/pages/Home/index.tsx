import React, { useEffect } from 'react'
import { Page } from 'layout/Page'

import styles from './styles.module.scss'
import { classes } from 'utils/classes'

export const HomePage = () => {
    useEffect(() => {
        document.title = 'Home'
    }, [])

    return (
        <Page>
            <h2>Home page</h2>

            <h3>Тестовое задание</h3>

            <p className={styles.subtitle}>
                Создать аналог телефонной книги мобильного телефона
            </p>

            <p className={styles.block}>
                Контакт должен содержать информацию (Имя, Фамилию, номер
                телефона, фото-не обязательно) Приложение должно содержать
                следующий функционал:
            </p>

            <p className={styles.subtitle}>Обязательные</p>

            <div className={styles.block}>
                <ul
                    className={classes([
                        styles.levelOneList,
                        styles.criteriaList,
                    ])}
                >
                    <li>Список всех контактов</li>
                    <li>Возможность найти контакт со списка (строка поиска)</li>
                    <li>Добавление, изменение, удаление контакта</li>
                    <li>Использовать препроцессор Sass</li>
                    <li>Использовать сборщик проектов Webpack</li>
                    <li>
                        Создать меню адаптивное с пунктами (использовать Routes)
                    </li>
                </ul>
                <ol className={styles.levelTwoList}>
                    <li>
                        Home, который ведет на домашнюю страницу с Заголовком
                        "Home"
                    </li>
                    <li>
                        Contacts, который ведет страницу с контактами "Contacts"
                    </li>
                    <li>About, который ведет страницу с Заголовком "About"</li>
                </ol>
            </div>

            <p className={styles.subtitle}>Будет плюсом</p>

            <ul className={styles.levelOneList}>
                <li>Добавление контакту фотографии</li>
                <li>Разработать дизайн приложения</li>
            </ul>
        </Page>
    )
}
