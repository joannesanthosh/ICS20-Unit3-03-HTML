// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Apr 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates the volume of a pyramid.
 */
function calculate() {
  // input
  const radiusOfTheSphere = parseInt(document.getElementById('radius-of-the-sphere').value)

  // process
  const volume = ((4 / 3) * Math.PI * (radiusOfTheSphere * radiusOfTheSphere * radiusOfTheSphere))

  // output
  document.getElementById('volume').innerHTML = '<p>The volume of the sphere is: ' + volume.toFixed(2) + ' cm³</p>'
  }
