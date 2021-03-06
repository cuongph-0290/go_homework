/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.temperature.City', null, global);
goog.exportSymbol('proto.temperature.Temperature', null, global);
goog.exportSymbol('proto.temperature.Temperature.TempInfo', null, global);
goog.exportSymbol('proto.temperature.Temperature.TempRange', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temperature.City = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temperature.City, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temperature.City.displayName = 'proto.temperature.City';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temperature.City.prototype.toObject = function(opt_includeInstance) {
  return proto.temperature.City.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temperature.City} msg The msg instance to transform.
 * @return {!Object}
 */
proto.temperature.City.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: msg.getName()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temperature.City}
 */
proto.temperature.City.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temperature.City;
  return proto.temperature.City.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temperature.City} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temperature.City}
 */
proto.temperature.City.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.temperature.City} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.temperature.City.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temperature.City.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.temperature.City.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.temperature.City} The clone.
 */
proto.temperature.City.prototype.cloneMessage = function() {
  return /** @type {!proto.temperature.City} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.temperature.City.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.temperature.City.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temperature.Temperature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.temperature.Temperature.repeatedFields_, null);
};
goog.inherits(proto.temperature.Temperature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temperature.Temperature.displayName = 'proto.temperature.Temperature';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.temperature.Temperature.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temperature.Temperature.prototype.toObject = function(opt_includeInstance) {
  return proto.temperature.Temperature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temperature.Temperature} msg The msg instance to transform.
 * @return {!Object}
 */
proto.temperature.Temperature.toObject = function(includeInstance, msg) {
  var f, obj = {
    temmpinfosList: jspb.Message.toObjectList(msg.getTemmpinfosList(),
    proto.temperature.Temperature.TempInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temperature.Temperature}
 */
proto.temperature.Temperature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temperature.Temperature;
  return proto.temperature.Temperature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temperature.Temperature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temperature.Temperature}
 */
proto.temperature.Temperature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 4:
      var value = new proto.temperature.Temperature.TempInfo;
      reader.readMessage(value,proto.temperature.Temperature.TempInfo.deserializeBinaryFromReader);
      msg.getTemmpinfosList().push(value);
      msg.setTemmpinfosList(msg.getTemmpinfosList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.temperature.Temperature} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.temperature.Temperature.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temperature.Temperature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.temperature.Temperature.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTemmpinfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.temperature.Temperature.TempInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.temperature.Temperature} The clone.
 */
proto.temperature.Temperature.prototype.cloneMessage = function() {
  return /** @type {!proto.temperature.Temperature} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated TempInfo temmpInfos = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.temperature.Temperature.TempInfo>}
 */
proto.temperature.Temperature.prototype.getTemmpinfosList = function() {
  return /** @type{!Array.<!proto.temperature.Temperature.TempInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.temperature.Temperature.TempInfo, 4));
};


/** @param {Array.<!proto.temperature.Temperature.TempInfo>} value  */
proto.temperature.Temperature.prototype.setTemmpinfosList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.temperature.Temperature.prototype.clearTemmpinfosList = function() {
  this.setTemmpinfosList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temperature.Temperature.TempRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temperature.Temperature.TempRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temperature.Temperature.TempRange.displayName = 'proto.temperature.Temperature.TempRange';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temperature.Temperature.TempRange.prototype.toObject = function(opt_includeInstance) {
  return proto.temperature.Temperature.TempRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temperature.Temperature.TempRange} msg The msg instance to transform.
 * @return {!Object}
 */
proto.temperature.Temperature.TempRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    max: msg.getMax(),
    min: msg.getMin()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temperature.Temperature.TempRange}
 */
proto.temperature.Temperature.TempRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temperature.Temperature.TempRange;
  return proto.temperature.Temperature.TempRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temperature.Temperature.TempRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temperature.Temperature.TempRange}
 */
proto.temperature.Temperature.TempRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMax(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.temperature.Temperature.TempRange} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.temperature.Temperature.TempRange.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temperature.Temperature.TempRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.temperature.Temperature.TempRange.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMax();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = this.getMin();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.temperature.Temperature.TempRange} The clone.
 */
proto.temperature.Temperature.TempRange.prototype.cloneMessage = function() {
  return /** @type {!proto.temperature.Temperature.TempRange} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 Max = 1;
 * @return {number}
 */
proto.temperature.Temperature.TempRange.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.temperature.Temperature.TempRange.prototype.setMax = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 Min = 2;
 * @return {number}
 */
proto.temperature.Temperature.TempRange.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.temperature.Temperature.TempRange.prototype.setMin = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.temperature.Temperature.TempInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temperature.Temperature.TempInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temperature.Temperature.TempInfo.displayName = 'proto.temperature.Temperature.TempInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temperature.Temperature.TempInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.temperature.Temperature.TempInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temperature.Temperature.TempInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.temperature.Temperature.TempInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    day: msg.getDay(),
    temprang: (f = msg.getTemprang()) && proto.temperature.Temperature.TempRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.temperature.Temperature.TempInfo}
 */
proto.temperature.Temperature.TempInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temperature.Temperature.TempInfo;
  return proto.temperature.Temperature.TempInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temperature.Temperature.TempInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temperature.Temperature.TempInfo}
 */
proto.temperature.Temperature.TempInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDay(value);
      break;
    case 4:
      var value = new proto.temperature.Temperature.TempRange;
      reader.readMessage(value,proto.temperature.Temperature.TempRange.deserializeBinaryFromReader);
      msg.setTemprang(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.temperature.Temperature.TempInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.temperature.Temperature.TempInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.temperature.Temperature.TempInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.temperature.Temperature.TempInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDay();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getTemprang();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.temperature.Temperature.TempRange.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.temperature.Temperature.TempInfo} The clone.
 */
proto.temperature.Temperature.TempInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.temperature.Temperature.TempInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string Day = 3;
 * @return {string}
 */
proto.temperature.Temperature.TempInfo.prototype.getDay = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.temperature.Temperature.TempInfo.prototype.setDay = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional TempRange tempRang = 4;
 * @return {proto.temperature.Temperature.TempRange}
 */
proto.temperature.Temperature.TempInfo.prototype.getTemprang = function() {
  return /** @type{proto.temperature.Temperature.TempRange} */ (
    jspb.Message.getWrapperField(this, proto.temperature.Temperature.TempRange, 4));
};


/** @param {proto.temperature.Temperature.TempRange|undefined} value  */
proto.temperature.Temperature.TempInfo.prototype.setTemprang = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.temperature.Temperature.TempInfo.prototype.clearTemprang = function() {
  this.setTemprang(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.temperature.Temperature.TempInfo.prototype.hasTemprang = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.temperature);
