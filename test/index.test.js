/**
 * Created by frondon on 6/2/17.
 */

const contextStatuses = require('./../lib/index');
const { expect } = require('chai');

describe('context statuses', () => {
  it('Should have defined specific properties', () => {
    expect(contextStatuses).to.have.property('isInformational');
    expect(contextStatuses).to.have.property('isSuccess');
    expect(contextStatuses).to.have.property('isRedirect');
    expect(contextStatuses).to.have.property('isClientError');
    expect(contextStatuses).to.have.property('isServerError');
    expect(contextStatuses).to.have.property('HTTP_100_CONTINUE');
    expect(contextStatuses).to.have.property('HTTP_101_SWITCHING_PROTOCOLS');
    expect(contextStatuses).to.have.property('HTTP_200_OK');
    expect(contextStatuses).to.have.property('HTTP_201_CREATED');
    expect(contextStatuses).to.have.property('HTTP_202_ACCEPTED');
    expect(contextStatuses).to.have.property('HTTP_203_NON_AUTHORITATIVE_INFORMATION');
    expect(contextStatuses).to.have.property('HTTP_204_NO_CONTENT');
    expect(contextStatuses).to.have.property('HTTP_205_RESET_CONTENT');
    expect(contextStatuses).to.have.property('HTTP_206_PARTIAL_CONTENT');
    expect(contextStatuses).to.have.property('HTTP_300_MULTIPLE_CHOICES');
    expect(contextStatuses).to.have.property('HTTP_301_MOVED_PERMANENTLY');
    expect(contextStatuses).to.have.property('HTTP_302_FOUND');
    expect(contextStatuses).to.have.property('HTTP_303_SEE_OTHER');
    expect(contextStatuses).to.have.property('HTTP_304_NOT_MODIFIED');
    expect(contextStatuses).to.have.property('HTTP_305_USE_PROXY');
    expect(contextStatuses).to.have.property('HTTP_306_RESERVED');
    expect(contextStatuses).to.have.property('HTTP_307_TEMPORARY_REDIRECT');
    expect(contextStatuses).to.have.property('HTTP_400_BAD_REQUEST');
    expect(contextStatuses).to.have.property('HTTP_401_UNAUTHORIZED');
    expect(contextStatuses).to.have.property('HTTP_402_PAYMENT_REQUIRED');
    expect(contextStatuses).to.have.property('HTTP_403_FORBIDDEN');
    expect(contextStatuses).to.have.property('HTTP_404_NOT_FOUND');
    expect(contextStatuses).to.have.property('HTTP_405_METHOD_NOT_ALLOWED');
    expect(contextStatuses).to.have.property('HTTP_406_NOT_ACCEPTABLE');
    expect(contextStatuses).to.have.property('HTTP_407_PROXY_AUTHENTICATION_REQUIRED');
    expect(contextStatuses).to.have.property('HTTP_408_REQUEST_TIMEOUT');
    expect(contextStatuses).to.have.property('HTTP_409_CONFLICT');
    expect(contextStatuses).to.have.property('HTTP_410_GONE');
    expect(contextStatuses).to.have.property('HTTP_411_LENGTH_REQUIRED');
    expect(contextStatuses).to.have.property('HTTP_412_PRECONDITION_FAILED');
    expect(contextStatuses).to.have.property('HTTP_413_REQUEST_ENTITY_TOO_LARGE');
    expect(contextStatuses).to.have.property('HTTP_414_REQUEST_URI_TOO_LONG');
    expect(contextStatuses).to.have.property('HTTP_415_UNSUPPORTED_MEDIA_TYPE');
    expect(contextStatuses).to.have.property('HTTP_416_REQUESTED_RANGE_NOT_SATISFIABLE');
    expect(contextStatuses).to.have.property('HTTP_417_EXPECTATION_FAILED');
    expect(contextStatuses).to.have.property('HTTP_428_PRECONDITION_REQUIRED');
    expect(contextStatuses).to.have.property('HTTP_429_TOO_MANY_REQUESTS');
    expect(contextStatuses).to.have.property('HTTP_431_REQUEST_HEADER_FIELDS_TOO_LARGE');
    expect(contextStatuses).to.have.property('HTTP_451_UNAVAILABLE_FOR_LEGAL_REASONS');
    expect(contextStatuses).to.have.property('HTTP_500_INTERNAL_SERVER_ERROR');
    expect(contextStatuses).to.have.property('HTTP_501_NOT_IMPLEMENTED');
    expect(contextStatuses).to.have.property('HTTP_502_BAD_GATEWAY');
    expect(contextStatuses).to.have.property('HTTP_503_SERVICE_UNAVAILABLE');
    expect(contextStatuses).to.have.property('HTTP_504_GATEWAY_TIMEOUT');
    expect(contextStatuses).to.have.property('HTTP_505_HTTP_VERSION_NOT_SUPPORTED');
    expect(contextStatuses).to.have.property('HTTP_511_NETWORK_AUTHENTICATION_REQUIRED');
  });

  describe('isInformational', () => {
    it('should return true when the status is 100', () => {
      expect(true).to.be.equal(contextStatuses.isInformational(100));
    });

    it('should return false when the status is 200', () => {
      expect(false).to.be.equal(contextStatuses.isInformational(200));
    });
  });

  describe('isSuccess', () => {
    it('should return true when the status is 204', () => {
      expect(true).to.be.equal(contextStatuses.isSuccess(204));
    });

    it('should return false when the status is 300', () => {
      expect(false).to.be.equal(contextStatuses.isSuccess(300));
    });
  });

  describe('isRedirect', () => {
    it('should return true when the status is 301', () => {
      expect(true).to.be.equal(contextStatuses.isRedirect(301));
    });

    it('should return false when the status is 400', () => {
      expect(false).to.be.equal(contextStatuses.isRedirect(400));
    });
  });

  describe('isClientError', () => {
    it('should return true when the status is 404', () => {
      expect(true).to.be.equal(contextStatuses.isClientError(404));
    });

    it('should return false when the status is 500', () => {
      expect(false).to.be.equal(contextStatuses.isClientError(500));
    });
  });

  describe('isServerError', () => {
    it('should return true when the status is 500', () => {
      expect(true).to.be.equal(contextStatuses.isServerError(500));
    });

    it('should return false when the status is 202', () => {
      expect(false).to.be.equal(contextStatuses.isServerError(202));
    });
  });
});
