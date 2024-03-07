route("/profile/:id")
ProfilePage:
{
    ProfileForm
}

ProfileForm: {
    subTypes.map(ProfileSubForm)
}