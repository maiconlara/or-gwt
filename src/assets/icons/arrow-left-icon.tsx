interface ArrowLeftIconProps {
    w?: number;
    h?: number;
    className?: string;
}

export const ArrowLeftIcon = ({ w = 37, h = 32, className }: ArrowLeftIconProps) => {
    return (
        <div className={className}>
            <svg width={w} height={h} viewBox="0 0 37 32" fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7259 0.781049C18.758 1.82245 18.758 3.51089 17.7259 4.55228L9.02328 13.3333H34.3571C35.8168 13.3333 37 14.5272 37 16C37 17.4728 35.8168 18.6667 34.3571 18.6667H9.02328L17.7259 27.4477C18.758 28.4891 18.758 30.1776 17.7259 31.219C16.6938 32.2604 15.0205 32.2604 13.9884 31.219L0.774075 17.8856C-0.258025 16.8442 -0.258025 15.1558 0.774075 14.1144L13.9884 0.781049C15.0205 -0.26035 16.6938 -0.26035 17.7259 0.781049Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
};
