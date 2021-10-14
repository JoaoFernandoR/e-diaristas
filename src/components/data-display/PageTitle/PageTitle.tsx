import React from 'react'

interface PageTitleProps {
    title: string;
    subtitle: string;
}

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
    return (
        <div>
            <h1> {title}</h1>
            <h1> {subtitle}</h1>
        </div>
    )
}

export default PageTitle