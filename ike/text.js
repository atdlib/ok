// a simple 8x8 font in an embarassingly inefficient packing scheme:

var pixelfont = tok([
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,1,1,1,0,1,],[0,1,1,1,0,1,1,1,],[1,1,0,1,1,1,0,1,],[0,1,1,1,0,1,1,1,],[1,1,0,1,1,1,0,1,],[0,1,1,1,0,1,1,1,],[1,1,0,1,1,1,0,1,],[0,1,1,1,0,1,1,1,],],
[[1,0,1,0,1,0,1,0,],[0,1,0,1,0,1,0,1,],[1,0,1,0,1,0,1,0,],[0,1,0,1,0,1,0,1,],[1,0,1,0,1,0,1,0,],[0,1,0,1,0,1,0,1,],[1,0,1,0,1,0,1,0,],[0,1,0,1,0,1,0,1,],],
[[0,0,1,0,0,0,1,0,],[1,0,0,0,1,0,0,0,],[0,0,1,0,0,0,1,0,],[1,0,0,0,1,0,0,0,],[0,0,1,0,0,0,1,0,],[1,0,0,0,1,0,0,0,],[0,0,1,0,0,0,1,0,],[1,0,0,0,1,0,0,0,],],
[[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],],
[[1,0,0,0,0,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,0,1,0,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,0,0,0,1,0,1,],[0,1,1,0,1,1,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,0,0,0,0,0,1,1,],[0,0,0,0,0,0,0,1,],[0,0,1,0,1,0,0,1,],[0,0,0,0,0,0,0,1,],[0,0,1,1,1,0,0,1,],[0,0,0,1,0,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[1,1,1,1,1,1,1,1,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[1,1,1,1,1,1,1,1,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],],
[[1,0,0,1,0,0,1,1,],[0,0,0,0,0,0,0,1,],[0,0,0,0,0,0,0,1,],[0,0,0,0,0,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,1,1,1,1,],[1,1,0,0,0,1,1,1,],[1,0,0,0,0,0,1,1,],[0,0,0,0,0,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[0,0,1,1,0,0,1,1,],[0,0,1,1,0,0,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,0,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,1,1,1,1,],[1,0,0,0,0,1,1,1,],[0,0,0,0,0,0,1,1,],[0,0,0,0,0,0,1,1,],[0,0,0,0,0,0,1,1,],[1,1,0,0,1,1,1,1,],[1,0,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,1,1,1,1,],[1,1,0,0,0,1,1,1,],[1,0,0,0,0,0,1,1,],[0,0,0,0,0,0,0,1,],[1,1,0,0,0,1,1,1,],[1,1,0,0,0,1,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,1,1,1,1,],[1,1,1,0,0,1,1,1,],[0,0,0,0,0,0,1,1,],[0,0,0,0,0,0,0,1,],[0,0,0,0,0,0,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,1,1,1,],[1,1,0,0,0,1,1,1,],[1,1,0,0,0,1,1,1,],[0,0,0,0,0,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[1,0,0,0,0,0,0,0,],[1,1,0,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,0,0,0,0,],[1,1,1,0,0,0,0,0,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,0,0,0,],[1,1,1,0,0,0,0,0,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,0,0,0,0,],[1,1,1,0,0,0,0,0,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,0,0,0,],[1,1,1,0,0,0,0,0,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[0,0,0,0,0,1,1,1,],[0,0,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[0,0,0,0,0,1,1,1,],[0,0,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[0,0,0,0,0,1,1,1,],[0,0,0,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[0,0,0,0,0,1,1,1,],[0,0,0,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[0,0,0,0,0,0,0,0,],[0,0,0,0,0,0,0,0,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,1,0,0,1,1,],[1,0,0,1,0,0,1,1,],[1,1,0,1,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,1,1,0,1,1,],[1,0,0,0,0,0,0,1,],[1,1,0,1,1,0,1,1,],[1,0,0,0,0,0,0,1,],[1,1,0,1,1,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,0,1,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,1,1,0,1,1,],[1,1,0,0,0,0,1,1,],[1,0,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,1,1,1,0,1,],[1,0,0,1,1,0,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,0,1,1,0,0,1,],[1,0,1,1,1,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,0,1,1,0,1,1,1,],[1,1,0,0,1,1,1,1,],[1,0,1,1,0,1,0,1,],[1,0,1,1,1,0,1,1,],[1,1,0,0,0,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,1,1,1,],[1,0,0,0,1,1,1,1,],[1,0,0,1,1,1,1,1,],[1,0,0,1,1,1,1,1,],[1,0,0,1,1,1,1,1,],[1,0,0,0,1,1,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,0,0,1,1,],[1,1,1,1,0,0,0,1,],[1,1,1,1,1,0,0,1,],[1,1,1,1,1,0,0,1,],[1,1,1,1,1,0,0,1,],[1,1,1,1,0,0,0,1,],[1,1,1,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,1,1,0,1,1,],[1,1,1,0,0,1,1,1,],[1,0,0,0,0,0,0,1,],[1,1,1,0,0,1,1,1,],[1,1,0,1,1,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,0,1,],[1,1,1,1,1,0,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,0,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[0,0,1,1,1,0,0,1,],[0,0,1,0,1,0,0,1,],[0,0,1,0,1,0,0,1,],[0,0,1,1,1,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,0,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[0,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[0,0,1,1,1,0,0,1,],[1,1,1,1,0,0,0,1,],[1,0,0,0,0,1,1,1,],[0,0,0,1,1,1,1,1,],[0,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[0,1,1,1,1,0,0,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,0,0,1,],[0,1,1,1,1,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[0,0,1,1,0,0,1,1,],[0,0,1,1,0,0,1,1,],[0,0,0,0,0,0,0,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[0,0,0,0,0,0,1,1,],[0,0,1,1,1,1,1,1,],[0,0,0,0,0,0,1,1,],[1,1,1,1,1,0,0,1,],[1,1,1,1,1,0,0,1,],[0,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[0,0,1,1,1,1,1,1,],[0,0,0,0,0,0,1,1,],[0,0,1,1,1,0,0,1,],[0,0,1,1,1,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[0,0,0,0,0,0,0,1,],[0,0,1,1,1,0,0,1,],[1,1,1,1,0,0,0,1,],[1,1,1,0,0,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[0,0,1,1,1,0,0,1,],[1,0,0,0,0,0,1,1,],[0,0,1,1,1,0,0,1,],[0,0,1,1,1,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[0,0,1,1,1,0,0,1,],[0,0,1,1,1,0,0,1,],[1,0,0,0,0,0,0,1,],[1,1,1,1,1,0,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,0,1,1,1,1,1,],],
[[1,1,1,1,0,0,1,1,],[1,1,1,0,0,1,1,1,],[1,1,0,0,1,1,1,1,],[1,0,0,1,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,1,0,0,1,],[1,1,1,1,0,0,1,1,],[1,1,1,0,0,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,0,0,0,0,0,0,1,],[0,0,0,1,1,0,0,0,],[0,0,1,1,0,0,0,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,0,0,1,0,1,],[1,0,1,0,1,1,0,1,],[1,0,1,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,1,1,1,1,],[1,1,0,1,0,1,1,1,],[1,1,0,1,0,1,1,1,],[1,0,1,1,1,0,1,1,],[1,0,0,0,0,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,0,0,0,0,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[1,0,1,1,1,1,0,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,1,1,1,],[0,1,1,1,1,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,0,1,1,],[0,0,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,0,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,0,0,0,0,0,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,0,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,0,0,0,0,0,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,0,0,0,1,],[0,1,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,0,0,0,0,0,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,0,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[0,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,0,1,],[1,1,1,1,0,1,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,0,1,1,1,1,],[0,0,0,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,0,1,1,],[0,1,1,1,0,1,1,1,],[0,1,1,0,1,1,1,1,],[0,1,0,0,1,1,1,1,],[0,0,1,1,0,1,1,1,],[0,1,1,1,1,0,1,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,0,1,],[0,0,1,1,1,0,0,1,],[0,1,0,1,0,1,0,1,],[0,1,1,0,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,0,1,],[0,0,1,1,1,1,0,1,],[0,1,0,1,1,1,0,1,],[0,1,1,0,1,1,0,1,],[0,1,1,1,0,1,0,1,],[0,1,1,1,1,0,0,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,1,1,1,],[1,0,1,1,1,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,0,1,1,1,0,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,0,0,0,0,0,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,1,1,1,],[1,0,1,1,1,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,0,1,0,1,],[1,0,1,1,1,0,1,1,],[1,1,0,0,0,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,0,0,0,0,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,0,0,0,0,1,1,1,],[0,1,1,1,1,0,1,1,],[0,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,0,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,0,1,1,1,0,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[0,1,1,0,1,1,0,1,],[0,1,0,1,0,1,0,1,],[0,0,1,1,1,0,0,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,0,1,],[1,0,1,1,1,0,1,1,],[1,1,0,1,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,0,1,0,1,1,1,],[1,0,1,1,1,0,1,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,0,1,],[1,0,1,1,1,0,1,1,],[1,1,0,1,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,0,0,0,0,0,0,1,],[1,1,1,1,1,0,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,0,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[0,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,1,0,1,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,1,1,0,1,1,],[1,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,0,0,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,0,0,1,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,1,1,1,1,],[1,1,0,1,0,1,1,1,],[1,1,0,1,0,1,1,1,],[1,0,1,1,1,0,1,1,],[1,0,1,1,1,0,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,0,1,],[1,0,0,1,1,0,0,1,],[1,0,1,0,0,1,0,1,],[1,0,1,0,0,1,0,1,],[1,0,0,1,1,0,0,1,],[1,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,0,1,1,1,],[1,1,1,1,1,0,1,1,],[1,1,0,0,0,0,1,1,],[1,0,1,1,1,0,1,1,],[1,1,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,0,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,0,0,0,1,],[1,0,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,0,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,0,1,],[1,1,1,1,1,1,0,1,],[1,1,1,1,1,1,0,1,],[1,1,0,0,0,0,0,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[1,0,0,0,0,0,0,1,],[1,0,1,1,1,1,1,1,],[1,1,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,0,0,1,1,],[1,1,1,0,1,1,0,1,],[1,1,1,0,1,1,1,1,],[1,0,0,0,0,0,0,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,0,0,1,1,],[1,0,1,1,1,0,1,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,0,1,1,],[1,0,0,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,0,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,0,0,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,0,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,0,1,1,1,0,1,1,],[1,0,1,0,0,1,1,1,],[1,0,0,1,1,1,1,1,],[1,0,1,0,0,1,1,1,],[1,0,1,1,1,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[0,0,0,1,0,0,1,1,],[0,1,1,0,1,1,0,1,],[0,1,1,0,1,1,0,1,],[0,1,1,0,1,1,0,1,],[0,1,1,0,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,0,0,0,0,1,1,],[1,0,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,0,0,1,1,],[1,0,1,1,1,0,1,1,],[1,0,1,1,1,0,1,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,0,1,1,],[1,1,1,1,1,0,0,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,1,1,0,0,0,1,],[1,0,1,0,1,1,1,1,],[1,0,0,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,0,0,0,0,0,1,],[1,0,1,1,1,1,1,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,1,0,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,0,0,0,0,0,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,0,1,1,0,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[0,1,1,1,1,1,0,1,],[0,1,1,0,1,1,0,1,],[0,1,1,0,1,1,0,1,],[0,1,0,1,0,1,0,1,],[1,0,1,1,1,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,1,1,1,0,1,1,],[1,1,0,1,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,0,1,0,1,1,1,],[1,0,1,1,1,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,1,1,1,1,0,1,],[1,0,1,1,1,1,0,1,],[1,1,0,0,0,0,0,1,],[1,1,1,1,1,1,0,1,],[1,1,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,0,1,1,1,1,1,],[1,0,0,0,0,0,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,0,1,1,1,],[1,1,0,1,1,1,1,1,],[1,1,0,1,1,1,1,1,],[1,0,1,1,1,1,1,1,],[1,1,0,1,1,1,1,1,],[1,1,0,1,1,1,1,1,],[1,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,0,0,1,1,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,1,1,0,1,1,],[1,1,1,1,0,1,1,1,],[1,1,1,1,0,1,1,1,],[1,1,0,0,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[1,1,1,1,1,1,1,1,],[1,0,0,1,1,0,1,1,],[0,1,1,0,0,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],[1,1,1,1,1,1,1,1,],],
[[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],[0,1,1,1,1,1,1,1,],],
]);
