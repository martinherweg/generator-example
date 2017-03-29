const postCSS_nano = () => {
  return [
    require('cssnano')({
      zindex: false,
      discardUnused: false,
      reduceIndents: false,
      mergeIndents: false
    })
  ]
}

export default postCSS_nano;