const tsTransformer = require('react-native-typescript-transformer')
const rnTransformer = require('react-native/jest/preprocessor')

const preprocessor = {
  ...rnTransformer,
  process(src, file) {
    return tsTransformer.transform({
      filename: file,
      localPath: file,
      options: {
        dev: true,
        inlineRequires: true,
        platform: '',
        projectRoot: '',
        retainLines: true,
      },
      src,
    }).code
  },
}

module.exports = preprocessor
