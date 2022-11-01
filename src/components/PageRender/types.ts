export type PageRenderProps = {
    renderRoute?: boolean
    renderType?: 'default' | 'form' | 'center'
    renderComponent?: JSX.Element
    authID?: number,
    pageName?: string
    pageTitle?: string
    className?: string
}