import { useLocation, useRoutes } from "react-router"
import { routes } from "../routers"
import { useEffect } from "react"

  const Routing = () => {
    const route = useRoutes(routes)

    const {pathname} = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      
    }, [pathname])
    


    return route;
}

export default Routing