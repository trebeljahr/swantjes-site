import React, { useState } from 'react';

export const Book = ({ color, content }) => {
    const [page, setPage] = useState(0);

    const previousPage = () => {
        setPage(oldPage => {
            if (page > 0) {
                return oldPage - 1;
            }
            return oldPage;
        });
    };

    const nextPage = () => {
        setPage(oldPage => {
            if (page < content.left.length - 1 && page < content.right.length - 1) {
                return oldPage + 1;
            }
            return oldPage;
        });
    };

    return (
        <div className={`fullScreen topLeft pageContainer ${color}`}>
            <div className="leftPage center">
                {content && content.left && content.left[page]}
                {page > 0 && (
                    <i onClick={previousPage} className="arrow left" id="previousPageArrow" />
                )}
            </div>
            <div className="pageDivider" />
            <div className="rightPage center">
                {content && content.right && content.right[page]}
                {page < content.right.length - 1 && (
                    <i onClick={nextPage} className="arrow right" id="nextPageArrow" />
                )}
            </div>
            <div className="pageNumbersContainer">
                {content.right.map((_, i) => (
                    <div className={i === page ? 'highlightedPageNumber' : ''}>
                        {i * 2 + 1}
                        {i * 2 + 2}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const RPage = ({ children }) => {
    return <Page orientation={'right'}>{children}</Page>;
};

export const LPage = ({ children }) => {
    return <Page orientation={'left'}>{children}</Page>;
};

const Page = ({ children, orientation }) => {
    return <div className={`${orientation}-page-content`}>{children}</div>;
};
