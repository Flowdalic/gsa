/* Greenbone Security Assistant
 *
 * Authors:
 * Björn Ricks <bjoern.ricks@greenbone.net>
 *
 * Copyright:
 * Copyright (C) 2017 Greenbone Networks GmbH
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

import FilterTerm from '../filterterm.js';

describe('FilterTerm equals', () => {

  test('should not equal object', () => {
    const term = new FilterTerm({});
    expect(term.equals({})).toBe(false);
  });

  test('should equal self', () => {
    const term = new FilterTerm({});
    expect(term.equals(term)).toBe(true);
  });

  test('empty terms should be equal', () => {
    const term1 = new FilterTerm({});
    const term2 = new FilterTerm({});
    expect(term1.equals(term2)).toBe(true);
  });

  test('terms with different keywords should not be equal', () => {
    const term1 = new FilterTerm({
      keyword: 'abc',
      relation: '=',
      value: '1',
    });
    const term2 = new FilterTerm({
      keyword: 'def',
      relation: '=',
      value: '1',
    });
    expect(term1.equals(term2)).toBe(false);
  });

  test('terms with different relations should not be equal', () => {
    const term1 = new FilterTerm({
      keyword: 'abc',
      relation: '=',
      value: '1',
    });
    const term2 = new FilterTerm({
      keyword: 'abc',
      relation: '~',
      value: '1',
    });
    expect(term1.equals(term2)).toBe(false);
  });

  test('terms with different values should not be equal', () => {
    const term1 = new FilterTerm({
      keyword: 'abc',
      relation: '=',
      value: '1',
    });
    const term2 = new FilterTerm({
      keyword: 'abc',
      relation: '=',
      value: '2',
    });
    expect(term1.equals(term2)).toBe(false);
  });

  test('terms should be equal', () => {
    const term1 = new FilterTerm({
      keyword: 'abc',
      relation: '=',
      value: '1',
    });
    const term2 = new FilterTerm({
      keyword: 'abc',
      relation: '=',
      value: '1',
    });
    expect(term1.equals(term2)).toBe(true);
  });
});

// vim: set ts=2 sw=2 tw=80:
