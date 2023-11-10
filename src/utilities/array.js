function arraySortByObjIdDesc(array) {
  return array.sort((a, b) => {
    return b.id - a.id
  })
}

export {arraySortByObjIdDesc}