/* Copyright (C) 2017-2019 Greenbone Networks GmbH
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

import styled from 'styled-components';

import _ from 'gmp/locale';

import DetailsBlock from 'web/entity/block';

import PropTypes from 'web/utils/proptypes';

import CertLink from 'web/components/link/certlink';
import CveLink from 'web/components/link/cvelink';
import ExternalLink from 'web/components/link/externallink';

import InfoTable from 'web/components/table/infotable';
import TableBody from 'web/components/table/body';
import TableData from 'web/components/table/data';
import TableRow from 'web/components/table/row';

const TableDataAlignTop = styled(TableData)`
  vertical-align: top;
`;

const References = ({nvt, links = true}) => {
  const {cves = [], bids = [], certs = [], xrefs = []} = nvt;
  const has_reference =
    cves.length > 0 || bids.length > 0 || certs.length > 0 || xrefs.length > 0;
  if (!has_reference) {
    return null;
  }
  return (
    <DetailsBlock title={_('References')}>
      <InfoTable>
        <TableBody>
          {cves.length > 0 && (
            <TableRow>
              <TableDataAlignTop>{_('CVE')}</TableDataAlignTop>
              <TableData>
                {cves.map(cve_id => (
                  <CveLink
                    title={_('View Details of {{cve_id}}', {cve_id})}
                    key={cve_id}
                    id={cve_id}
                    textOnly={!links}
                  />
                ))}
              </TableData>
            </TableRow>
          )}

          {bids.length > 0 && (
            <TableRow>
              <TableDataAlignTop>{_('BID')}</TableDataAlignTop>
              <TableData>
                {bids.map(bid => (
                  <span key={bid}>{bid}</span>
                ))}
              </TableData>
            </TableRow>
          )}

          {certs.length > 0 && (
            <TableRow>
              <TableDataAlignTop>{_('CERT')}</TableDataAlignTop>
              <TableData>
                {certs.map(cert => (
                  <CertLink
                    key={cert.id}
                    type={cert.type}
                    id={cert.id}
                    textOnly={!links}
                  />
                ))}
              </TableData>
            </TableRow>
          )}

          {xrefs.length > 0 && (
            <TableRow>
              <TableDataAlignTop>{_('Other')}</TableDataAlignTop>
              <TableData>
                {xrefs.map(xref => (
                  <ExternalLink
                    key={xref.ref}
                    textOnly={!links || xref.type !== 'URL'}
                    to={xref.ref}
                  >
                    {xref.ref}
                  </ExternalLink>
                ))}
              </TableData>
            </TableRow>
          )}
        </TableBody>
      </InfoTable>
    </DetailsBlock>
  );
};

References.propTypes = {
  links: PropTypes.bool,
  nvt: PropTypes.model.isRequired,
};

export default References;

// vim: set ts=2 sw=2 tw=80:
