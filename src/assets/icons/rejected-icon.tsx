interface RejectedIconProps {
    w?: number;
    h?: number;
    className?: string;
}

export const RejectedIcon = ({ w = 14, h = 14, className }: RejectedIconProps) => {
    return (
        <div className={className}>
            <svg width={w} height={h} viewBox="0 0 512 512" fill="none">
                <path
                    d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
                    fill="currentColor"
                />
                <path d="M392 240H120V272H392V240Z" fill="white" />
            </svg>
        </div>
    );
};
