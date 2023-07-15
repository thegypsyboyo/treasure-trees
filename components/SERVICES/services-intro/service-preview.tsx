'use client'

import ServicesIntro from "./services-intro";
import { usePreview } from "../../../lib/sanity.preview"
type Props = {
    query: string;
}


export default function ServicePreview({query}:Props) {
    const services = usePreview(null, query);

    return <ServicesIntro services={services}/>
}