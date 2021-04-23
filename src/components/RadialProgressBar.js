const RadialProgressBar = ({ percent }) => {
    const validPercent = percent?.toString().length <= 1 ? percent.toString() + '0' : percent?.toString().replace('.', '');
    // console.log(validPercent);
    return (
        <div className="percent">
            <svg>
                <circle cx="24" cy="24" r="24"></circle>
                <circle cx="24" cy="24" r="24" style={{
                    strokeDashoffset: `calc(148 - (148 * ${validPercent}) / 100)`,
                }}></circle>
            </svg>
            <div className="number">
                <h2>{validPercent}<span>%</span></h2>
            </div>
        </div>
    );
}

export default RadialProgressBar;