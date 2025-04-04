import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";

interface PaginationProps {
    textColor: string;
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({ textColor, currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center gap-6">
            <RiArrowLeftSLine
                className={`h-5 w-5 cursor-pointer ${currentPage === 1 ? "text-gray-400" : "text-blue"}`}
                onClick={handlePreviousPage}
            />

            {Array.from({ length: totalPages }).map((_, index) => (
                <span
                    key={index}
                    className={`text-lg font-normal cursor-pointer ${currentPage === index + 1 ? "font-bold" : ""}`}
                    style={{ color: textColor }}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </span>
            ))}

            <RiArrowRightSLine
                className={`h-5 w-5 cursor-pointer ${currentPage === totalPages ? "text-gray-400" : "text-blue"}`}
                onClick={handleNextPage}
            />
        </div>
    );
};