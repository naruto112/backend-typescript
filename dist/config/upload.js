"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

var _crypto = _interopRequireDefault(require("crypto"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tmpFolder = _path.default.resolve(__dirname, "..", "..", "tmp");

var _default = {
  driver: process.env.STORAGE_DRIVER,
  tmpFolder,
  uploadsFolder: _path.default.resolve(tmpFolder, "uploads"),
  multer: {
    storage: _multer.default.diskStorage({
      destination: tmpFolder,

      filename(request, file, callback) {
        const fileHash = _crypto.default.randomBytes(10).toString("hex");

        const filename = `${fileHash}-${file.originalname}`;
        return callback(null, filename);
      }

    })
  },
  config: {
    disk: {},
    aws: {
      bucket: "app-backend-gobarber"
    }
  }
};
exports.default = _default;