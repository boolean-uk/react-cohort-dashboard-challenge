Component Tree diagram

- App
  const [currentUser, setCurrentUser] = useState(null)

  -HeaderViewModule
  const { currentUsers } = props

  -CurrentlyLoggedInProfileModule
  const { currentUser } = props

  -HomePage
  const [posts, setPosts] = useState([])
  useEffect(() => {
  fetch(ULR) -> GET
  }, [URL] )

  -BlogViewModule

  -CreatePostModule
  const onPostPost = () => {
  fetch(URL) -> POST
  }

  -CommentViewModule
  const onPostComment = () => {
  fetch(URL) -> POST
  }

  -ProfilePage
  const { currentUser } = props
  post -> handleSaveProfileChanges
