route("/profile/:id")
ProfilePage:
{
    ProfileForm
}

ProfileForm: {
    subforms.map(ProfileSubForm)
}