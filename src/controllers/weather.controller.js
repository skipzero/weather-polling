const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { weatherService } = require('../services');

const createWeather = catchAsync(async (req, res) => {
  const user = await weatherService.createWeather(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getWeathers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await weatherService.queryWeathers(filter, options);
  res.send(result);
});

const getWeather = catchAsync(async (req, res) => {
  const user = await weatherService.getWeatherById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateWeather = catchAsync(async (req, res) => {
  const user = await weatherService.updateWeatherById(req.params.userId, req.body);
  res.send(user);
});

const deleteWeather = catchAsync(async (req, res) => {
  await weatherService.deleteWeatherById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createWeather,
  getWeathers,
  getWeather,
  updateWeather,
  deleteWeather,
};
