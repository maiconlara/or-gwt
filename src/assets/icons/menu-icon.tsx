interface MenuIconProps {
    w?: number;
    h?: number;
    className?: string;
}

export const MenuIcon = ({ w = 14, h = 14, className }: MenuIconProps) => {
    return (
        <div className={className}>
            <svg width={w} height={h} viewBox="0 0 40 17" fill="none">
                <path d="M0 2H40" stroke="currentColor" strokeWidth="3" />
                <path d="M0 8H40" stroke="currentColor" strokeWidth="3" />
                <path d="M0 15H40" stroke="currentColor" strokeWidth="3" />
            </svg>
        </div>
    );
};
