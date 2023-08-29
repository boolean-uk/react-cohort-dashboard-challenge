function RequiredFieldWarning(props) {
    const {requiredCommentFieldError} = props;
    return (
        <>
           {requiredCommentFieldError && (
                            <p class="error">
                               *Required field
                            </p>
                        )}
        </>
    );
}

export default RequiredFieldWarning;
