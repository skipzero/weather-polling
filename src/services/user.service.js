const httpStatus = require('http-status');
const { Weather } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a weather
 * @param {Object} weatherBody
 * @returns {Promise<User>}
 */
const createWeather = async (weatherBody) => {
  return Weather.create(weatherBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWeather = async (filter, options) => {
  const weather = await Weather.paginate(filter, options);
  return weather;
};

/**
 * Get weather by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getWeatherById = async (id) => {
  return Weather.findById(id);
};

/**
 * Update weather by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateWeatherById = async (weatherId, updateBody) => {
  const weather = await getWeatherById(weatherId);
  if (!weather) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Weather not found');
  }

  Object.assign(weather, updateBody);
  await weather.save();
  return weather;
};

/**
 * Delete weather by id
 * @param {ObjectId} weatherId
 * @returns {Promise<User>}
 */
const deleteWeatherById = async (weatherId) => {
  const weather = await getWeatherById(weatherId);
  if (!weather) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Weather not found');
  }
  await weather.remove();
  return weather;
};

module.exports = {
  createWeather,
  queryWeather,
  getWeatherById,
  updateWeatherById,
  deleteWeatherById,
};
