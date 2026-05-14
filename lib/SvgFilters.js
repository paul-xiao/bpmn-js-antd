import {
  append as svgAppend,
  create as svgCreate
} from 'tiny-svg';

import {
  query as domQuery
} from 'min-dom';

export function createShadowFilters(svg) {
  var defs = domQuery('defs', svg);

  if (!defs) {
    defs = svgCreate('defs');
    svgAppend(svg, defs);
  }

  // Light shadow — Activities / Tasks
  var filterLight = svgCreate('filter', {
    id: 'antd-shadow-light',
    x: '-10%',
    y: '-10%',
    width: '130%',
    height: '140%'
  });

  svgAppend(filterLight, svgCreate('feDropShadow', {
    dx: '0',
    dy: '1',
    stdDeviation: '2',
    'flood-color': 'rgba(0, 0, 0, 0.06)',
    'flood-opacity': '1'
  }));

  svgAppend(defs, filterLight);

  // Medium shadow — Gateways / Events
  var filterMedium = svgCreate('filter', {
    id: 'antd-shadow-medium',
    x: '-10%',
    y: '-10%',
    width: '130%',
    height: '140%'
  });

  svgAppend(filterMedium, svgCreate('feDropShadow', {
    dx: '0',
    dy: '2',
    stdDeviation: '4',
    'flood-color': 'rgba(0, 0, 0, 0.08)',
    'flood-opacity': '1'
  }));

  svgAppend(defs, filterMedium);

  // Heavy shadow — End Events / Call Activities
  var filterHeavy = svgCreate('filter', {
    id: 'antd-shadow-heavy',
    x: '-15%',
    y: '-15%',
    width: '140%',
    height: '150%'
  });

  svgAppend(filterHeavy, svgCreate('feDropShadow', {
    dx: '0',
    dy: '4',
    stdDeviation: '8',
    'flood-color': 'rgba(0, 0, 0, 0.12)',
    'flood-opacity': '1'
  }));

  svgAppend(defs, filterHeavy);
}
