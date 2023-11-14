import Header from "../../components/Header/Header";
import NavBar from "../../components/Nav-bar/NavBar";
import Main from "../../components/Main/Main";
 

function Home({posts,root,loggedInUser,shouldGetPost}) {
 
  if(!loggedInUser) return <p></p>
  const loggedInUserInitials = loggedInUser.firstName.slice(0,1)+loggedInUser.firstName.slice(0,1)
  console.log(loggedInUserInitials)

  function loggedInUserColor(user) {
    if(user === 1 ) return 'logged-in-user'
    
  }
  return (
    <div className="container">
      <Header loggedInUserInitials={loggedInUserInitials}></Header>
      <div className="container-main">
        <NavBar></NavBar>
        <Main posts={posts} root={root}  loggedInUserColor={loggedInUserColor} loggedInUserInitials={loggedInUserInitials} shouldGetPost={shouldGetPost} loggedInUser={loggedInUser}></Main>
      </div>
    </div>
  )
}

export default Home;
