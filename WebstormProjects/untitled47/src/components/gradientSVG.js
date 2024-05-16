function GradientSVG() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
        <svg className={'stroke-[#BEE6FD]'} style={{ height: 0 }}>
            <defs>
                <linearGradient id={idCSS} gradientTransform={gradientTransform}>
                    <stop offset="16.29%" stopColor="#12005A" />
                    <stop offset="85.56%" stopColor="rgba(5, 0, 255, 0.50)" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default GradientSVG;
