export function pathBuild(...pathSegments) {
  const pathFilter = pathSegments.filter(
    (segment) => segment !== undefined && segment !== null,
  );
  return pathFilter.join("/");
}

export function initialiser(firstName, lastName) {
  return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
}
