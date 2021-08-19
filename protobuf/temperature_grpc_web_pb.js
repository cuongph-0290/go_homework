/**
 * @fileoverview gRPC-Web generated client stub for temperature
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.temperature = require('./temperature_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.temperature.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.temperature.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.temperature.City,
 *   !proto.temperature.Temperature>}
 */
const methodDescriptor_Greeter_GetTemperature = new grpc.web.MethodDescriptor(
  '/temperature.Greeter/GetTemperature',
  grpc.web.MethodType.UNARY,
  proto.temperature.City,
  proto.temperature.Temperature,
  /**
   * @param {!proto.temperature.City} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.temperature.Temperature.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.temperature.City,
 *   !proto.temperature.Temperature>}
 */
const methodInfo_Greeter_GetTemperature = new grpc.web.AbstractClientBase.MethodInfo(
  proto.temperature.Temperature,
  /**
   * @param {!proto.temperature.City} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.temperature.Temperature.deserializeBinary
);


/**
 * @param {!proto.temperature.City} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.temperature.Temperature)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.temperature.Temperature>|undefined}
 *     The XHR Node Readable Stream
 */
proto.temperature.GreeterClient.prototype.getTemperature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/temperature.Greeter/GetTemperature',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetTemperature,
      callback);
};


/**
 * @param {!proto.temperature.City} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.temperature.Temperature>}
 *     Promise that resolves to the response
 */
proto.temperature.GreeterPromiseClient.prototype.getTemperature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/temperature.Greeter/GetTemperature',
      request,
      metadata || {},
      methodDescriptor_Greeter_GetTemperature);
};


module.exports = proto.temperature;

