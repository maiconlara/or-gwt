interface WorldIconProps {
    w?: number;
    h?: number;
    className?: string;
}

export const WorldIcon = ({ w = 30, h = 30, className }: WorldIconProps) => {
    return (
        <div className={className}>
            <svg width={w} height={h} viewBox="0 0 30 30" fill="none">
                <g clipPath="url(#clip0_2574_14355)">
                    <path
                        d="M15 30C23.2593 30 30 23.2588 30 15C30 6.74062 23.2588 0 15 0C6.74068 0 0 6.74115 0 15C0 23.2594 6.74115 30 15 30ZM19.45 27.4721C20.2999 26.3861 20.9514 25.0907 21.4407 23.7885H24.8957C23.4317 25.4355 21.5644 26.7154 19.45 27.4721ZM26.2162 22.0312H22.0089C22.5276 20.1452 22.8319 18.0541 22.8966 15.8789H28.2123C28.0642 18.1282 27.3521 20.2257 26.2162 22.0312ZM26.2162 7.96875C27.3521 9.77432 28.0642 11.8718 28.2123 14.1211H22.8966C22.8319 11.9459 22.5276 9.85477 22.0089 7.96875H26.2162ZM24.8957 6.21094H21.4406C20.9515 4.90986 20.3001 3.6143 19.45 2.52791C21.5644 3.28465 23.4317 4.56445 24.8957 6.21094ZM15.8789 1.90816C17.6037 2.49275 18.841 4.544 19.5487 6.21094H15.8789V1.90816ZM15.8789 7.96875H20.1813C20.7401 9.81902 21.0689 11.9181 21.1381 14.1211H15.8789V7.96875ZM15.8789 15.8783H21.1381C21.0689 18.0819 20.7401 20.181 20.1813 22.0312H15.8789V15.8783ZM15.8789 23.7885H19.5487C18.8398 25.4588 17.6023 27.5078 15.8789 28.0918V23.7885ZM5.10434 23.7891H8.55937C9.04852 25.0901 9.6999 26.3857 10.55 27.4721C8.43557 26.7154 6.5683 25.4355 5.10434 23.7891ZM14.1211 28.0918C12.3978 27.5078 11.1603 25.459 10.4513 23.7891H14.1211V28.0918ZM14.1211 22.0312H9.81873C9.25986 20.181 8.93109 18.0819 8.86189 15.8789H14.1211V22.0312ZM14.1211 14.1211H8.86189C8.93109 11.9181 9.25986 9.81902 9.81873 7.96875H14.1211V14.1211ZM14.1211 1.90816V6.21094H10.4513C11.1602 4.54113 12.3977 2.49229 14.1211 1.90816ZM10.55 2.52791C9.70008 3.61395 9.04869 4.90928 8.55932 6.21094H5.10434C6.5683 4.56445 8.43557 3.28459 10.55 2.52791ZM3.78381 7.96816H7.99107C7.4724 9.85477 7.16813 11.9459 7.10344 14.1211H1.7877C1.93582 11.8718 2.64785 9.77432 3.78381 7.96816ZM1.7877 15.8789H7.10344C7.16813 18.0541 7.4724 20.1452 7.99107 22.0312H3.78381C2.64785 20.2257 1.93582 18.1282 1.7877 15.8789Z"
                        fill="black"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2574_14355">
                        <rect width="30" height="30" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
