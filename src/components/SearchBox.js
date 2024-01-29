import React from "react";
import "../styles.css";

const SearchBox = ({ placeholder, type = 'text', className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`p-2 border border-gray-300 rounded-md ${className}`}
        />
    );
};

export default SearchBox;