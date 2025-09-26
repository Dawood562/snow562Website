import Link from "next/link";
import errorJSON from "./errors.json";
export const errorData: Error[] = errorJSON;

interface Error {
    number: string;
    text: string;
}

export async function generateStaticParams() {
    return (errorData as Error[]).map((error) => ({
    number: error.number,
    }));
}

export default function ErrorPage({ params: { number } }: { params: { number: string } }) {
    const error = errorData.find((e) => e.number === number);
    if (!error) {
        return (
            <div id="root"> 

                <div id="title">Unknown Error</div>
                <div id="description">This snowflake error code is not recognized.<Link href="/">Return home?</Link></div>
                <br />
            </div>
        );
    };

    return (
    <div id="root">
        <div id="title">{number}</div>
        <div id="description">{error.text}<br /><br /><Link href="/">Return home?</Link></div>
    </div>
    );
}
