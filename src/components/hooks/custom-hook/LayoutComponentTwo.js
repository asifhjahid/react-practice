import useWindowSize from "./useWindowSize"

export default function LayoutComponent() {
    
    const onSmallScreen = useWindowSize(700)
    return (
        <div className={onSmallScreen ? 'small': 'large'}>
            <h1>This is an another component</h1>
        </div>
    )
}
