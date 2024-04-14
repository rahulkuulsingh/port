
import Link from "next/link";
import { TagItem } from "../utils/definations";

export default function Tag({url, label}:TagItem){
    return(
        <>
        <Link href={url}>{label}</Link>
        </>
    );
}