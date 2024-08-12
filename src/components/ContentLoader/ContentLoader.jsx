export const ContentLoader = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(20)">
                    <stop offset="5%" stopColor="#eee">
                        <animate attributeName="stop-color" values="#EEEEEE; #CCCCCC; #EEEEEE" dur="2s" repeatCount="indefinite"></animate>
                    </stop>
                    <stop offset="95%" stopColor="#aaa">
                        <animate attributeName="stop-color" values="#EEEEEE; #DDDDDD; #EEEEEE" dur="3s" repeatCount="indefinite"></animate>
                    </stop>
                </linearGradient>
            </defs>
            <rect fill="url(#myGradient)" width={props.width} height={props.height}/>
        </svg>
    )
}