function GradientSVG2() {
    const idCSS = "hello";
    const gradientTransform = `rotate(90)`;
    return (
        <svg className={'stroke-[#BEE6FD]'} style={{ height: 0 }}>
            <defs>
                <linearGradient id={idCSS} gradientTransform={gradientTransform}>
                    <stop offset="16.29%" stopColor="rgba(95, 92, 250, 0.50)" />
                    <stop offset="85.56%" stopColor="#36C5F1" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default GradientSVG2;
