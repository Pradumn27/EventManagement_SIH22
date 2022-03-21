import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

$(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
  });
});