import PropTypes from 'prop-types'

HomeIconSVG.propTypes = {
    scale: PropTypes.number
}

export default function HomeIconSVG({ scale }) {
    if (scale === undefined)
        scale = 1.0

    return (
    <svg style={{display: "block", width: "50%", marginLeft: "auto", marginRight: "auto", height: 76}} width={33 * scale} height={36 * scale} viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 36V12L16.6 0L32.5 12V36H20.8V21.75H12.15V36H0.5Z" fill="#64648C" />
    </svg>
    )
}
