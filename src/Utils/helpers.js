export function getInitials(name) {
    const nameParts = name.split(' ');
    const firstNameInitial = nameParts[0].charAt(0);
    const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
    return `${firstNameInitial}${lastNameInitial}`.toUpperCase();
  }
