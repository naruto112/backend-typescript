"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: process.env.MAIL_DRIVER || "ethereal",
  defaults: {
    from: {
      email: "renatorock3@hotmail.com",
      name: "Renato GoBarber"
    }
  }
};
exports.default = _default;