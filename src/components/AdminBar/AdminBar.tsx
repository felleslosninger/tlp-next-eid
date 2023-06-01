import React from "react"

import classes from './AdminBar.module.css'
import { Container } from "../Container/Container"

const AdminBar = () => {
    return (
        <div className={classes.bar}>
            <Container>
                admin
            </Container>
        </div>
    )
}

export { AdminBar }