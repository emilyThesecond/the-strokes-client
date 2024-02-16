import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div>
            <footer>
                <p>&copy; {currentYear} The Strokes Unofficial Fan Page</p>
            </footer>
        </div>
    )
}

export default Footer

