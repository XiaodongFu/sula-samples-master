// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/fuwenbing/webStormProjects/sula-samples-master/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
    {
      "path": "/",
      "exact": true,
      "component": require('@/component/user-info-list.jsx').default
    },
  {
    "path": "/create-form",
    "exact": true,
    "component": require('@/pages/create-form/index.jsx').default
  },
  {
    "path": "/mins5/01-create-form",
    "exact": true,
    "component": require('@/pages/mins5/01-create-form.js').default
  },
  {
    "path": "/query-table",
    "exact": true,
    "component": require('@/pages/query-table/index.jsx').default
  },
  {
    "path": "/step-form",
    "exact": true,
    "component": require('@/pages/step-form/index.jsx').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
