module.exports = {
    resolve: {
      fallback: {
        'fs': false,
        'path': false, // ammo.js seems to also use path
      }
    }
  }