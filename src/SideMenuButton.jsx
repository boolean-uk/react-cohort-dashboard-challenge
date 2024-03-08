import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

SideMenuButton.propTypes = {
    imageContent: PropTypes.node,
    navPath: PropTypes.string
}

export default function SideMenuButton({ imageContent, navPath }) {
    const navigate = useNavigate()

    if (navPath === undefined || navPath === null) navPath = "/"

    return (
        <button className='side_button' onClick={() => navigate(navPath)}>
            {imageContent}
        </button>
    )
}
