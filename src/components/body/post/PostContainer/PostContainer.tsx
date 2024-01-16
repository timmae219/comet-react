import React, { useState } from "react";

import './PostContainer.css';

export default function PostContainer(): JSX.Element {

    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000); // only for "mocking" loading since real loading is not implemented yet
    }

    // TODO: divide post more fine-grained and apply loading animation to every child component
        // Post-heading
        // Post-image
        // Post-text
        
    return (
    <div className={isLoading ? "Post-container-loading" : "Post-container"}>
        {isLoading ? "" : "Post Container Placeholder"}
    </div>);
}