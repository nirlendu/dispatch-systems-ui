import React from 'react';
import { shallow, mount, render } from 'enzyme';

var Book = require('./../public/pages/pc/journey/components/booking-button');

describe("A suite", function() {

  it("can run an expectation with render", function() {
    expect(mount(<Book/>).find('.booking-btn').length).toBe(1);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Book />).is('.booking-btn')).toBe(true);
  });

});