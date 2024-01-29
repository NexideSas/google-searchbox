import "../styles.css";

export function SearchBox(placeholder, type = 'text', className) {
    var input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.className = `p-2 border border-gray-300 rounded-md ${className}`;
    return input;
}
