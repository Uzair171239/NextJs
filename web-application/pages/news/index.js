import { Fragment } from "react"
import Link from "next/link"

const news = () => {
    return (
        <Fragment>
            <h1>The news Page</h1>
            <ul>
            <li><Link href="/news/nextjs-is-a-great-framework">NextJs is a great framework</Link></li>
            <li><Link href="/news/details-page">Details page </Link></li>
            </ul>
        </Fragment>
    )
}

export default news
