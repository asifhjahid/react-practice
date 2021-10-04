import useWindowSize from "./useWindowSize"


export default function LayoutComponent() {
    const onSmallScreen = useWindowSize(768)
    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small': 'large'} device</h1>
        </div>
    )
}
