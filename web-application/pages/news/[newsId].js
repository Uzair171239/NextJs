import { useRouter } from "next/router"

const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;
    return (
        <div>
            <h1>This is a {newsId}</h1>
        </div>
    )
}

export default DetailPage
