import React, { useEffect } from 'react'


import { PageRenderProps } from './types'

const PageRender: React.FC <PageRenderProps> = ({  pageName, pageTitle, renderComponent, renderRoute }) => {

    //const { routes } = useAppSelector(state => state.modules)

    // useEffect(() => {
    //     if(!!routes && !!authID) setIsAuth(routes.includes(authID))
    //     else setIsAuth(true)
    // }, [routes, authID])

    useEffect(() => {
        if(pageTitle && !renderRoute) document.title = pageTitle 
    }, [pageTitle, renderRoute])

    return(

        <>
                        <>
   
                            <main id = {`main${pageName}`} className = "scroll">
                                <div id = "mainContainer">{renderComponent }</div>
                            </main>
                        </>
            
        </>

    )

}
export default PageRender