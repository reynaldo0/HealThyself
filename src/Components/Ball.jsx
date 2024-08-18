const Ball = ({
    color = '#9DC2FF',
    size = 130,
    classList = ""
}) => {
    const viewBoxSize = size;

    return (
        <div className={`animate-floating -z-10 ${classList}`}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx={viewBoxSize / 2} cy={viewBoxSize / 2} r={viewBoxSize / 2} fill={color} />
            </svg>
        </div>
    );
}

export default Ball;
