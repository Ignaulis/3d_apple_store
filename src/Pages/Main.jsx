import { useContext } from "react"
import { RouterContext } from "../Router/Router"
import Page404 from "./Page404"

export default function Main() {
    const { page, routes } = useContext(RouterContext);
    return routes?.[page]?.page ?? <Page404 />;
}
