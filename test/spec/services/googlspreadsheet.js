'use strict';

describe('Service: GooglSpreadsheet', function () {

  // load the service's module
  beforeEach(module('lo2kWebsiteApp'));

  // instantiate service
  var GooglSpreadsheet;
  beforeEach(inject(function (_GooglSpreadsheet_) {
    GooglSpreadsheet = _GooglSpreadsheet_;
  }));

  it('should do something', function () {
    expect(!!GooglSpreadsheet).toBe(true);
  });

});
