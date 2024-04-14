
import Link from "next/link";
import { TagItem } from "../lib/definations";

export default function Tag({url, label}:TagItem){
    return(
        <>
        <Link href={url}>{label}</Link>
        </>
    );
}