import {useState} from "react";
import axios from "axios";
import {Review} from "../msw/types";

export default function Home() {
    const [reviews, setReviews] = useState<Review[] | null>(null)
    const handleGetReviews = async () => {
        const {data} = await axios('/reviews')
        setReviews(data)

    }

    return (
        <div>
            <button onClick={handleGetReviews}>Load reviews</button>
            {reviews ? <span>True</span> : <span>False</span>}
        </div>
    )
}

export async function getServerSideProps() {
    const {data} = await axios('https://my.backend/book')


    return {
        props: {
            book: data,
        },
    }
}
