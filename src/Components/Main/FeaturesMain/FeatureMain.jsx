import PostCreate from "./PostCreate/PostCreate";
import Posting from './Posting/Posting'
import PropTypes from 'prop-types'

export default function FeaturesMain({cardType, id}) {

    function featureCheck() {
        switch (cardType) {
            case 'PostCreate' :
                return <PostCreate />
                case 'Post':
                    return <Posting id={id} />
                    default:
                        return null // Default case returns null if cardType doesn't match any case
        }
    }

    return <div className="feature">{featureCheck()}</div>
}

FeaturesMain.propTypes = {
    cardType: PropTypes.string.isRequired,
    id: PropTypes.string
}