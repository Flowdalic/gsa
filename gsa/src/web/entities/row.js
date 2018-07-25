/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2017 - 2018 Greenbone Networks GmbH
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import React from 'react';

import glamorous from 'glamorous';

import Theme from '../utils/theme';

import EntityActions from './actions';

export const withEntityRow = (actions = EntityActions, options = {}) =>
  Component => {

  const EntityRowWrapper = props => {
    return (
      <Component
        {...options}
        actions={actions}
        {...props}
      />
    );
  };
  return EntityRowWrapper;
};

export const RowDetailsToggle = glamorous.span(
  'row-details-toggle',
  {
    cursor: 'pointer',
    textDecoration: 'none',
    color: Theme.blue,
    ':hover': {
      textDecoration: 'underline',
      color: Theme.blue,
    },
    '@media print': {
      color: Theme.black,
    },
  },
);

// vim: set ts=2 sw=2 tw=80:
