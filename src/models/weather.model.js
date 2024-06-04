const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const weatherSchema = mongoose.Schema(
  {
    dateutc: {
      type: Date,
      index: true,
      trim: true,
    },
    tempinf: {
      type: Number,
      trim: true,
    },
    humidityin: {
      type: Number,
      trim: true,
    },
    baromrelin: {
      type: Number,
      trim: true,
    },
    baromabsin: {
      type: Number,
      trim: true,
    },
    tempf: {
      type: Number,
      trim: true,
    },
    humidity: {
      type: Number,
      trim: true,
    },
    winddir: {
      type: Number,
      trim: true,
    },
    windspeedmph: {
      type: Number,
      trim: true,
    },
    windgustmph: {
      type: Number,
      trim: true,
    },
    maxdailygust: {
      type: Number,
      trim: true,
    },
    hourlyrainin: {
      type: Number,
      trim: true,
    },
    eventrainin: {
      type: Number,
      trim: true,
    },
    dailyrainin: {
      type: Number,
      trim: true,
    },
    weeklyrainin: {
      type: Number,
      trim: true,
    },
    monthlyrainin: {
      type: Number,
      trim: true,
    },
    totalrainin: {
      type: Number,
      trim: true,
    },
    solarradiation: {
      type: Number,
      trim: true,
    },
    uv: {
      type: Number,
      trim: true,
    },
    batt_co2: {
      type: Number,
      trim: true,
    },
    feelslike: {
      type: Number,
      trim: true,
    },
    dewPoint: {
      type: Number,
      trim: true,
    },
    feelslikein: {
      type: Number,
      trim: true,
    },
    dewpointin: {
      type: Number,
      trim: true,
    },
    lastRain: {
      type: Number,
      trim: true,
    },
    date: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// const userSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       lowercase: true,
//       validate(value) {
//         if (!validator.isEmail(value)) {
//           throw new Error('Invalid email');
//         }
//       },
//     },
//     password: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 8,
//       validate(value) {
//         if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
//           throw new Error('Password must contain at least one letter and one number');
//         }
//       },
//       private: true, // used by the toJSON plugin
//     },
//     role: {
//       type: String,
//       enum: roles,
//       default: 'user',
//     },
//     isEmailVerified: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// add plugin that converts mongoose to json
weatherSchema.plugin(toJSON);
weatherSchema.plugin(paginate);

/**
 * @typedef Weather
 */
const Weather = mongoose.model('Weather', weatherSchema);

module.exports = Weather;
