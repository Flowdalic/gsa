/* Copyright (C) 2018 Greenbone Networks GmbH
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
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

import {setLocale} from 'gmp/locale/lang';

import {render, fireEvent} from 'web/utils/testing';

import {
  ICON_SIZE_LARGE_PIXELS,
  ICON_SIZE_MEDIUM_PIXELS,
} from 'web/components/icon/withIconSize';

import CloseButton from '../closebutton';

setLocale('en');

describe('Dialog CloseButton tests', () => {
  test('should render', () => {
    const {element} = render(<CloseButton onClick={() => {}} />);

    expect(element).toMatchSnapshot();
    expect(element).toHaveAttribute('title', 'Close');
    expect(element).toHaveStyleRule('height', ICON_SIZE_MEDIUM_PIXELS);
    expect(element).toHaveStyleRule('width', ICON_SIZE_MEDIUM_PIXELS);
  });

  test('should call close handler', () => {
    const handler = jest.fn();

    const {element} = render(<CloseButton onClick={handler} />);

    fireEvent.click(element);

    expect(handler).toHaveBeenCalled();
  });

  test('should render a large button', () => {
    const {element} = render(<CloseButton onClick={() => {}} size="large" />);

    expect(element).toHaveStyleRule('height', ICON_SIZE_LARGE_PIXELS);
    expect(element).toHaveStyleRule('width', ICON_SIZE_LARGE_PIXELS);
  });
});

// vim: set ts=2 sw=2 tw=80:
