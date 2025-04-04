interface SpotifyIconProps {
    w?: number;
    h?: number;
    className?: string;
}

export const SpotifyIcon = ({ w = 30, h = 30, className }: SpotifyIconProps) => {
    return (
        <div className={className}>
            <svg width={w} height={h} viewBox="0 0 30 30" fill="none">
                <g clipPath="url(#clip0_2574_14347)">
                    <path
                        d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                        fill="#12C64B"
                    />
                    <path
                        d="M20.4185 20.5449C20.2997 20.7479 20.1051 20.8955 19.8776 20.9553C19.6501 21.015 19.4081 20.9821 19.2049 20.8636C16.8713 19.5 14.1764 19.2818 12.3253 19.3295C11.1229 19.3603 9.92702 19.518 8.7577 19.8C8.54 19.8385 8.31575 19.7945 8.12881 19.6764C7.94187 19.5584 7.80567 19.3749 7.74685 19.1618C7.68803 18.9487 7.71082 18.7213 7.81076 18.5241C7.91069 18.3269 8.0806 18.174 8.28724 18.0954C9.57547 17.7752 10.8944 17.5946 12.2213 17.5568C13.4912 17.5099 14.7624 17.6019 16.0122 17.8312C17.4511 18.0917 18.8348 18.5967 20.1032 19.3244C20.2045 19.3834 20.2931 19.4618 20.3639 19.5553C20.4347 19.6487 20.4863 19.7553 20.5156 19.8688C20.5449 19.9823 20.5514 20.1005 20.5348 20.2166C20.5181 20.3326 20.4786 20.4442 20.4185 20.5449Z"
                        fill="white"
                    />
                    <path
                        d="M22.0695 17.1155C21.9769 17.2744 21.8443 17.4061 21.6849 17.4977C21.5255 17.5892 21.3448 17.6373 21.1609 17.6371C20.9744 17.6374 20.7913 17.5873 20.6308 17.4922C17.8678 15.878 14.6769 15.6172 12.4831 15.6854C11.0588 15.7214 9.64241 15.9082 8.25753 16.2428C7.99261 16.3051 7.71384 16.2624 7.4798 16.1235C7.24575 15.9846 7.07467 15.7603 7.0025 15.4979C6.93033 15.2355 6.96269 14.9553 7.09279 14.7163C7.22289 14.4772 7.4406 14.2979 7.70015 14.2161C9.22626 13.8384 10.7888 13.6269 12.3604 13.5854C13.865 13.5275 15.3713 13.6367 16.8518 13.9109C18.5548 14.2197 20.1921 14.8181 21.6928 15.6803C21.9325 15.8211 22.1068 16.0512 22.1774 16.3201C22.248 16.5891 22.2092 16.8751 22.0695 17.1155Z"
                        fill="white"
                    />
                    <path
                        d="M24.2045 13.361C24.1192 13.5074 24.0059 13.6356 23.871 13.7381C23.7361 13.8406 23.5822 13.9155 23.4183 13.9584C23.2544 14.0013 23.0836 14.0114 22.9158 13.9882C22.748 13.9649 22.5864 13.9088 22.4403 13.8229C15.871 9.98428 7.34994 12.2667 7.26983 12.2888C7.10423 12.3413 6.92975 12.3598 6.75684 12.3432C6.58393 12.3265 6.41616 12.2752 6.26357 12.1922C6.11098 12.1092 5.97673 11.9962 5.86885 11.8601C5.76097 11.7239 5.68169 11.5674 5.63576 11.3999C5.58984 11.2324 5.57821 11.0573 5.60157 10.8852C5.62493 10.713 5.68281 10.5474 5.77173 10.3982C5.86064 10.249 5.97878 10.1192 6.11904 10.0168C6.25931 9.91432 6.41881 9.84123 6.58801 9.80189C8.45545 9.34163 10.3671 9.08389 12.2897 9.03315C14.1346 8.96439 15.9814 9.09814 17.7971 9.43201C19.8852 9.80747 21.8937 10.5373 23.7357 11.59C23.8833 11.675 24.0126 11.7884 24.1161 11.9236C24.2196 12.0588 24.2954 12.2132 24.3389 12.3779C24.3825 12.5425 24.3931 12.7141 24.37 12.8829C24.3469 13.0516 24.2907 13.2141 24.2045 13.361Z"
                        fill="white"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_2574_14347">
                        <rect width="30" height="30" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};
