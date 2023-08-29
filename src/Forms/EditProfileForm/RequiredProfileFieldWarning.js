function RequiredProfileFieldWarning(props) {
    const {requiredProfileFieldError} = props;
    return (
        <>
          {requiredProfileFieldError && (
                            <p class="error">Required field</p>
                        )}
        </>
    );
}

export default RequiredProfileFieldWarning;
